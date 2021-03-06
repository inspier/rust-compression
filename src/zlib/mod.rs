//! rust-compression
//!
//! # Licensing
//! This Source Code is subject to the terms of the Mozilla Public License
//! version 2.0 (the "License"). You can obtain a copy of the License at
//! <http://mozilla.org/MPL/2.0/>.
#![cfg(feature = "zlib")]

pub(crate) mod decoder;
pub(crate) mod encoder;

#[cfg(test)]
mod tests {
    use crate::action::Action;
    use crate::traits::decoder::DecodeExt;
    use crate::traits::encoder::EncodeExt;
    use crate::zlib::decoder::ZlibDecoder;
    use crate::zlib::encoder::ZlibEncoder;
    #[cfg(not(feature = "std"))]
    use alloc::vec::Vec;
    use rand::distributions::Standard;
    use rand::{thread_rng, Rng};

    fn check(testarray: &[u8]) {
        let encoded = testarray
            .to_vec()
            .encode(&mut ZlibEncoder::new(), Action::Finish)
            .collect::<Result<Vec<_>, _>>();
        let decoded = encoded
            .unwrap()
            .decode(&mut ZlibDecoder::new())
            .collect::<Result<Vec<_>, _>>()
            .unwrap();

        assert_eq!(testarray.to_vec(), decoded);
    }

    #[test]
    fn test_empty() {
        check(&[]);
    }

    #[test]
    fn test_unit() {
        check(b"a");
    }

    #[test]
    fn test_arr() {
        check(b"aaaaaaaaaaa");
    }

    #[test]
    fn test_std() {
        check(b"aabbaabbaaabbbaaabbbaabbaabb");
    }

    #[test]
    fn test_long() {
        check(&(b"a".iter().cycle().take(260).cloned().collect::<Vec<u8>>()));
    }

    #[test]
    fn test_multiblocks() {
        let rng = thread_rng();

        check(&(rng.sample_iter(&Standard).take(323_742).collect::<Vec<_>>()));
    }

    #[test]
    fn test_multiblocks2() {
        let rng = thread_rng();

        check(&(rng.sample_iter(&Standard).take(323_742).collect::<Vec<_>>()));
    }

    #[test]
    fn test_multiblocks3() {
        let rng = thread_rng();

        check(
            &(rng
                .sample_iter(&Standard)
                .take(0xF_FFFF)
                .collect::<Vec<_>>()),
        );
    }

    fn test_rand_with_len(len: usize) {
        let rng = thread_rng();

        check(&(rng.sample_iter(&Standard).take(len).collect::<Vec<_>>()));
    }

    #[test]
    fn test_multiblocks6() {
        test_rand_with_len(6);
    }

    #[test]
    fn test_multiblocks4() {
        test_rand_with_len(0x0001_0000);
    }

    #[test]
    fn test_multiblocks5() {
        test_rand_with_len(0x10_0001);
    }
}
