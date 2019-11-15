(function() {var implementors = {};
implementors["compression"] = [{text:"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a> for <a class=\"enum\" href=\"compression/prelude/enum.Action.html\" title=\"enum compression::prelude::Action\">Action</a>",synthetic:false,types:["compression::action::Action"]},{text:"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a> for <a class=\"enum\" href=\"compression/prelude/enum.CompressionError.html\" title=\"enum compression::prelude::CompressionError\">CompressionError</a>",synthetic:false,types:["compression::error::CompressionError"]},{text:"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a> for <a class=\"struct\" href=\"compression/prelude/struct.LzssDecoder.html\" title=\"struct compression::prelude::LzssDecoder\">LzssDecoder</a>",synthetic:false,types:["compression::lzss::decoder::LzssDecoder"]},{text:"impl&lt;F:&nbsp;<a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a> for <a class=\"struct\" href=\"compression/prelude/struct.LzssEncoder.html\" title=\"struct compression::prelude::LzssEncoder\">LzssEncoder</a>&lt;F&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;F: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/ops/function/trait.Fn.html\" title=\"trait core::ops::function::Fn\">Fn</a>(<a class=\"enum\" href=\"compression/prelude/enum.LzssCode.html\" title=\"enum compression::prelude::LzssCode\">LzssCode</a>, <a class=\"enum\" href=\"compression/prelude/enum.LzssCode.html\" title=\"enum compression::prelude::LzssCode\">LzssCode</a>) -&gt; <a class=\"enum\" href=\"https://doc.rust-lang.org/nightly/core/cmp/enum.Ordering.html\" title=\"enum core::cmp::Ordering\">Ordering</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Copy.html\" title=\"trait core::marker::Copy\">Copy</a>,&nbsp;</span>",synthetic:false,types:["compression::lzss::encoder::LzssEncoder"]},{text:"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a> for <a class=\"enum\" href=\"compression/prelude/enum.LzssCode.html\" title=\"enum compression::prelude::LzssCode\">LzssCode</a>",synthetic:false,types:["compression::lzss::LzssCode"]},{text:"impl&lt;'a, I:&nbsp;<a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a>, D:&nbsp;<a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a>, B:&nbsp;<a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a> for <a class=\"struct\" href=\"compression/prelude/struct.DecodeIterator.html\" title=\"struct compression::prelude::DecodeIterator\">DecodeIterator</a>&lt;'a, I, D, B&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;I: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/iter/traits/iterator/trait.Iterator.html\" title=\"trait core::iter::traits::iterator::Iterator\">Iterator</a>&lt;Item = D::<a class=\"type\" href=\"compression/prelude/trait.Decoder.html#associatedtype.Input\" title=\"type compression::prelude::Decoder::Input\">Input</a>&gt;,<br>&nbsp;&nbsp;&nbsp;&nbsp;D: <a class=\"trait\" href=\"compression/prelude/trait.Decoder.html\" title=\"trait compression::prelude::Decoder\">Decoder</a>,<br>&nbsp;&nbsp;&nbsp;&nbsp;B: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/borrow/trait.BorrowMut.html\" title=\"trait core::borrow::BorrowMut\">BorrowMut</a>&lt;I&gt;,<br>&nbsp;&nbsp;&nbsp;&nbsp;<a class=\"enum\" href=\"compression/prelude/enum.CompressionError.html\" title=\"enum compression::prelude::CompressionError\">CompressionError</a>: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;D::<a class=\"type\" href=\"compression/prelude/trait.Decoder.html#associatedtype.Error\" title=\"type compression::prelude::Decoder::Error\">Error</a>&gt;,&nbsp;</span>",synthetic:false,types:["compression::traits::decoder::DecodeIterator"]},{text:"impl&lt;'a, I:&nbsp;<a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a>, E:&nbsp;<a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a> for <a class=\"struct\" href=\"compression/prelude/struct.EncodeIterator.html\" title=\"struct compression::prelude::EncodeIterator\">EncodeIterator</a>&lt;'a, I, E&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;I: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/iter/traits/iterator/trait.Iterator.html\" title=\"trait core::iter::traits::iterator::Iterator\">Iterator</a>&lt;Item = E::<a class=\"type\" href=\"compression/prelude/trait.Encoder.html#associatedtype.In\" title=\"type compression::prelude::Encoder::In\">In</a>&gt;,<br>&nbsp;&nbsp;&nbsp;&nbsp;E: <a class=\"trait\" href=\"compression/prelude/trait.Encoder.html\" title=\"trait compression::prelude::Encoder\">Encoder</a>,<br>&nbsp;&nbsp;&nbsp;&nbsp;<a class=\"enum\" href=\"compression/prelude/enum.CompressionError.html\" title=\"enum compression::prelude::CompressionError\">CompressionError</a>: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;E::<a class=\"type\" href=\"compression/prelude/trait.Encoder.html#associatedtype.Error\" title=\"type compression::prelude::Encoder::Error\">Error</a>&gt;,&nbsp;</span>",synthetic:false,types:["compression::traits::encoder::EncodeIterator"]},{text:"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a> for <a class=\"struct\" href=\"compression/prelude/struct.BZip2Decoder.html\" title=\"struct compression::prelude::BZip2Decoder\">BZip2Decoder</a>",synthetic:false,types:["compression::bzip2::decoder::BZip2Decoder"]},{text:"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a> for <a class=\"struct\" href=\"compression/prelude/struct.BZip2Encoder.html\" title=\"struct compression::prelude::BZip2Encoder\">BZip2Encoder</a>",synthetic:false,types:["compression::bzip2::encoder::BZip2Encoder"]},{text:"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a> for <a class=\"enum\" href=\"compression/prelude/enum.BZip2Error.html\" title=\"enum compression::prelude::BZip2Error\">BZip2Error</a>",synthetic:false,types:["compression::bzip2::error::BZip2Error"]},{text:"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a> for <a class=\"struct\" href=\"compression/prelude/struct.Deflater.html\" title=\"struct compression::prelude::Deflater\">Deflater</a>",synthetic:false,types:["compression::deflate::decoder::Deflater"]},{text:"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a> for <a class=\"struct\" href=\"compression/prelude/struct.Inflater.html\" title=\"struct compression::prelude::Inflater\">Inflater</a>",synthetic:false,types:["compression::deflate::encoder::Inflater"]},{text:"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a> for <a class=\"struct\" href=\"compression/prelude/struct.LzhufDecoder.html\" title=\"struct compression::prelude::LzhufDecoder\">LzhufDecoder</a>",synthetic:false,types:["compression::lzhuf::decoder::LzhufDecoder"]},{text:"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a> for <a class=\"struct\" href=\"compression/prelude/struct.LzhufEncoder.html\" title=\"struct compression::prelude::LzhufEncoder\">LzhufEncoder</a>",synthetic:false,types:["compression::lzhuf::encoder::LzhufEncoder"]},{text:"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a> for <a class=\"enum\" href=\"compression/prelude/enum.LzhufMethod.html\" title=\"enum compression::prelude::LzhufMethod\">LzhufMethod</a>",synthetic:false,types:["compression::lzhuf::LzhufMethod"]},{text:"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a> for <a class=\"struct\" href=\"compression/prelude/struct.GZipDecoder.html\" title=\"struct compression::prelude::GZipDecoder\">GZipDecoder</a>",synthetic:false,types:["compression::gzip::decoder::GZipDecoder"]},{text:"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a> for <a class=\"struct\" href=\"compression/prelude/struct.GZipEncoder.html\" title=\"struct compression::prelude::GZipEncoder\">GZipEncoder</a>",synthetic:false,types:["compression::gzip::encoder::GZipEncoder"]},{text:"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a> for <a class=\"struct\" href=\"compression/prelude/struct.ZlibDecoder.html\" title=\"struct compression::prelude::ZlibDecoder\">ZlibDecoder</a>",synthetic:false,types:["compression::zlib::decoder::ZlibDecoder"]},{text:"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a> for <a class=\"struct\" href=\"compression/prelude/struct.ZlibEncoder.html\" title=\"struct compression::prelude::ZlibEncoder\">ZlibEncoder</a>",synthetic:false,types:["compression::zlib::encoder::ZlibEncoder"]},];

            if (window.register_implementors) {
                window.register_implementors(implementors);
            } else {
                window.pending_implementors = implementors;
            }
        })()