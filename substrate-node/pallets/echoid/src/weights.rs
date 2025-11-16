use frame_support::weights::Weight;

pub trait WeightInfo {
	fn register() -> Weight;
	fn attest() -> Weight;
	fn revoke() -> Weight;
}

impl WeightInfo for () {
	fn register() -> Weight {
		Weight::from_parts(10_000, 0)
	}

	fn attest() -> Weight {
		Weight::from_parts(10_000, 0)
	}

	fn revoke() -> Weight {
		Weight::from_parts(10_000, 0)
	}
}