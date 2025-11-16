use super::*;

#[cfg(feature = "runtime-benchmarks")]
use frame_benchmarking::v2::*;
use frame_system::RawOrigin;

#[benchmarks]
mod benchmarks {
	use super::*;

	#[benchmark]
	fn register() {
		let caller: T::AccountId = whitelisted_caller();
		let handle = vec![0u8; T::MaxHandle::get() as usize];
		let bio = vec![0u8; T::MaxBio::get() as usize];
		let links = vec![vec![0u8; T::MaxLinkLen::get() as usize]; T::MaxLinks::get() as usize];
		let skills = vec![vec![0u8; T::MaxSkillLen::get() as usize]; T::MaxSkills::get() as usize];
		let score = 100;

		#[extrinsic_call]
		register(RawOrigin::Signed(caller), handle, bio, links, skills, score);
	}

	#[benchmark]
	fn attest() {
		let attester: T::AccountId = whitelisted_caller();
		let subject: T::AccountId = account("subject", 0, 0);
		let score = 50;
		let comment = vec![0u8; 256];

		#[extrinsic_call]
		attest(RawOrigin::Signed(attester), subject, score, comment);
	}

	#[benchmark]
	fn revoke() {
		let attester: T::AccountId = whitelisted_caller();
		let subject: T::AccountId = account("subject", 0, 0);

		// Pre-insert attestation
		let score = 50;
		let comment = vec![0u8; 256];
		assert_ok!(Pallet::<T>::attest(RawOrigin::Signed(attester.clone()).into(), subject.clone(), score, comment));

		#[extrinsic_call]
		revoke(RawOrigin::Signed(attester), subject);
	}

	impl_benchmark_test_suite!(Pallet, crate::mock::new_test_ext(), crate::mock::Test);
}