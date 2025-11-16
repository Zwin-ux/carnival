#![cfg_attr(not(feature = "std"), no_std)]

/// Edit this file to define a new pallet.
pub use pallet::*;

#[cfg(test)]
mod mock;

#[cfg(test)]
mod tests;

#[cfg(feature = "runtime-benchmarks")]
mod benchmarking;

pub mod weights;
pub use weights::*;

#[frame_support::pallet]
pub mod pallet {
	use super::*;
	use frame_support::pallet_prelude::*;
	use frame_system::pallet_prelude::*;
	use sp_std::prelude::*;

	/// Configure the pallet by specifying the parameters and types on which it depends.
	#[pallet::config]
	pub trait Config: frame_system::Config {
		/// Because this pallet emits events, it depends on the runtime's definition of an event.
		type RuntimeEvent: From<Event<Self>> + IsType<<Self as frame_system::Config>::RuntimeEvent>;

		/// A maximum length for the handle.
		#[pallet::constant]
		type MaxHandle: Get<u32>;

		/// A maximum length for the bio.
		#[pallet::constant]
		type MaxBio: Get<u32>;

		/// A maximum number of links.
		#[pallet::constant]
		type MaxLinks: Get<u32>;

		/// A maximum length for each link.
		#[pallet::constant]
		type MaxLinkLen: Get<u32>;

		/// A maximum number of skills.
		#[pallet::constant]
		type MaxSkills: Get<u32>;

		/// A maximum length for each skill.
		#[pallet::constant]
		type MaxSkillLen: Get<u32>;
	}

	#[pallet::pallet]
	pub struct Pallet<T>(_);

	/// Profile storage: maps account to profile data
	#[pallet::storage]
	#[pallet::getter(fn profile)]
	pub type Profiles<T: Config> = StorageMap<
		_,
		Blake2_128Concat,
		T::AccountId,
		Profile<T::MaxHandle, T::MaxBio, T::MaxLinks, T::MaxLinkLen, T::MaxSkills, T::MaxSkillLen>,
		OptionQuery,
	>;

	/// Attestations storage: double map from attester to subject to attestation data
	#[pallet::storage]
	#[pallet::getter(fn attestation)]
	pub type Attestations<T: Config> = StorageDoubleMap<
		_,
		Blake2_128Concat,
		T::AccountId, // attester
		Blake2_128Concat,
		T::AccountId, // subject
		Attestation,
		OptionQuery,
	>;

	/// Events
	#[pallet::event]
	#[pallet::generate_deposit(pub(super) fn deposit_event)]
	pub enum Event<T: Config> {
		/// A profile was registered or updated.
		ProfileRegistered { who: T::AccountId },
		/// An attestation was made.
		AttestationMade { attester: T::AccountId, subject: T::AccountId },
		/// An attestation was revoked.
		AttestationRevoked { attester: T::AccountId, subject: T::AccountId },
	}

	/// Errors
	#[pallet::error]
	pub enum Error<T> {
		/// Handle too long.
		HandleTooLong,
		/// Bio too long.
		BioTooLong,
		/// Too many links.
		TooManyLinks,
		/// Link too long.
		LinkTooLong,
		/// Too many skills.
		TooManySkills,
		/// Skill too long.
		SkillTooLong,
		/// Attestation already exists.
		AttestationAlreadyExists,
		/// Attestation not found.
		AttestationNotFound,
	}

	/// Calls
	#[pallet::call]
	impl<T: Config> Pallet<T> {
		/// Register or update a profile.
		#[pallet::call_index(0)]
		#[pallet::weight(T::WeightInfo::register())]
		pub fn register(
			origin: OriginFor<T>,
			handle: BoundedVec<u8, T::MaxHandle>,
			bio: BoundedVec<u8, T::MaxBio>,
			links: BoundedVec<BoundedVec<u8, T::MaxLinkLen>, T::MaxLinks>,
			skills: BoundedVec<BoundedVec<u8, T::MaxSkillLen>, T::MaxSkills>,
			score: u32,
		) -> DispatchResult {
			let who = ensure_signed(origin)?;

			let profile = Profile { handle, bio, links, skills, score };
			<Profiles<T>>::insert(&who, profile);

			Self::deposit_event(Event::ProfileRegistered { who });
			Ok(())
		}

		/// Make an attestation.
		#[pallet::call_index(1)]
		#[pallet::weight(T::WeightInfo::attest())]
		pub fn attest(
			origin: OriginFor<T>,
			subject: T::AccountId,
			score: u32,
			comment: BoundedVec<u8, T::MaxBio>, // reusing MaxBio for comment length
		) -> DispatchResult {
			let attester = ensure_signed(origin)?;

			ensure!(!Attestations::<T>::contains_key(&attester, &subject), Error::<T>::AttestationAlreadyExists);

			let attestation = Attestation { score, comment };
			<Attestations<T>>::insert(&attester, &subject, attestation);

			Self::deposit_event(Event::AttestationMade { attester, subject });
			Ok(())
		}

		/// Revoke an attestation.
		#[pallet::call_index(2)]
		#[pallet::weight(T::WeightInfo::revoke())]
		pub fn revoke(
			origin: OriginFor<T>,
			subject: T::AccountId,
		) -> DispatchResult {
			let attester = ensure_signed(origin)?;

			ensure!(Attestations::<T>::contains_key(&attester, &subject), Error::<T>::AttestationNotFound);

			<Attestations<T>>::remove(&attester, &subject);

			Self::deposit_event(Event::AttestationRevoked { attester, subject });
			Ok(())
		}
	}
}

/// Profile struct
#[derive(Clone, Encode, Decode, Eq, PartialEq, RuntimeDebug, Default, TypeInfo, MaxEncodedLen)]
pub struct Profile<MaxHandle, MaxBio, MaxLinks, MaxLinkLen, MaxSkills, MaxSkillLen>
where
	MaxHandle: Get<u32>,
	MaxBio: Get<u32>,
	MaxLinks: Get<u32>,
	MaxLinkLen: Get<u32>,
	MaxSkills: Get<u32>,
	MaxSkillLen: Get<u32>,
{
	pub handle: BoundedVec<u8, MaxHandle>,
	pub bio: BoundedVec<u8, MaxBio>,
	pub links: BoundedVec<BoundedVec<u8, MaxLinkLen>, MaxLinks>,
	pub skills: BoundedVec<BoundedVec<u8, MaxSkillLen>, MaxSkills>,
	pub score: u32,
}

/// Attestation struct
#[derive(Clone, Encode, Decode, Eq, PartialEq, RuntimeDebug, Default, TypeInfo, MaxEncodedLen)]
pub struct Attestation {
	pub score: u32,
	pub comment: BoundedVec<u8, ConstU32<256>>, // fixed length for simplicity
}