use super::*;
use crate::mock::*;
use frame_support::{assert_noop, assert_ok};

#[test]
fn register_profile_works() {
	new_test_ext().execute_with(|| {
		let account = 1;
		let handle = b"test_handle".to_vec();
		let bio = b"test bio".to_vec();
		let links = vec![b"https://example.com".to_vec()];
		let skills = vec![b"Rust".to_vec()];
		let score = 100;

		assert_ok!(Echoid::register(
			RuntimeOrigin::signed(account),
			handle.clone().try_into().unwrap(),
			bio.clone().try_into().unwrap(),
			links.clone().into_iter().map(|l| l.try_into().unwrap()).collect::<Vec<_>>().try_into().unwrap(),
			skills.clone().into_iter().map(|s| s.try_into().unwrap()).collect::<Vec<_>>().try_into().unwrap(),
			score
		));

		let profile = Echoid::profile(account).unwrap();
		assert_eq!(profile.handle, handle);
		assert_eq!(profile.bio, bio);
		assert_eq!(profile.score, score);
	});
}

#[test]
fn attest_works() {
	new_test_ext().execute_with(|| {
		let attester = 1;
		let subject = 2;
		let score = 50;
		let comment = b"Good work".to_vec();

		assert_ok!(Echoid::attest(
			RuntimeOrigin::signed(attester),
			subject,
			score,
			comment.clone().try_into().unwrap()
		));

		let attestation = Echoid::attestation(attester, subject).unwrap();
		assert_eq!(attestation.score, score);
		assert_eq!(attestation.comment, comment);
	});
}

#[test]
fn revoke_works() {
	new_test_ext().execute_with(|| {
		let attester = 1;
		let subject = 2;

		assert_ok!(Echoid::attest(
			RuntimeOrigin::signed(attester),
			subject,
			50,
			b"comment".to_vec().try_into().unwrap()
		));

		assert_ok!(Echoid::revoke(RuntimeOrigin::signed(attester), subject));

		assert!(Echoid::attestation(attester, subject).is_none());
	});
}

#[test]
fn attest_twice_fails() {
	new_test_ext().execute_with(|| {
		let attester = 1;
		let subject = 2;

		assert_ok!(Echoid::attest(
			RuntimeOrigin::signed(attester),
			subject,
			50,
			b"comment".to_vec().try_into().unwrap()
		));

		assert_noop!(
			Echoid::attest(
				RuntimeOrigin::signed(attester),
				subject,
				60,
				b"another".to_vec().try_into().unwrap()
			),
			Error::<Test>::AttestationAlreadyExists
		);
	});
}

#[test]
fn revoke_nonexistent_fails() {
	new_test_ext().execute_with(|| {
		let attester = 1;
		let subject = 2;

		assert_noop!(
			Echoid::revoke(RuntimeOrigin::signed(attester), subject),
			Error::<Test>::AttestationNotFound
		);
	});
}