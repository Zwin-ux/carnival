use crate as pallet_echoid;
use frame_support::derive_impl;
use frame_system as system;
use sp_runtime::BuildStorage;

type Block = frame_system::mocking::MockBlock<Test>;

// Configure a mock runtime to test the pallet.
frame_support::construct_runtime!(
	pub enum Test
	{
		System: frame_system,
		Echoid: pallet_echoid,
	}
);

#[derive_impl(frame_system::config_preludes::TestDefaultConfig as frame_system::DefaultConfig)]
impl frame_system::Config for Test {
	type Block = Block;
}

impl pallet_echoid::Config for Test {
	type RuntimeEvent = RuntimeEvent;
	type MaxHandle = frame_support::traits::ConstU32<32>;
	type MaxBio = frame_support::traits::ConstU32<256>;
	type MaxLinks = frame_support::traits::ConstU32<10>;
	type MaxLinkLen = frame_support::traits::ConstU32<128>;
	type MaxSkills = frame_support::traits::ConstU32<20>;
	type MaxSkillLen = frame_support::traits::ConstU32<64>;
}

// Build genesis storage according to the mock runtime.
pub fn new_test_ext() -> sp_io::TestExternalities {
	frame_system::GenesisConfig::<Test>::default().build_storage().unwrap().into()
}