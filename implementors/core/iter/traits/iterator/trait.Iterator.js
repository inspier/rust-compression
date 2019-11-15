(function() {var implementors = {};
implementors["compression"] = [{text:"impl&lt;'_, I, D, B&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/iter/traits/iterator/trait.Iterator.html\" title=\"trait core::iter::traits::iterator::Iterator\">Iterator</a> for <a class=\"struct\" href=\"compression/prelude/struct.DecodeIterator.html\" title=\"struct compression::prelude::DecodeIterator\">DecodeIterator</a>&lt;'_, I, D, B&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;I: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/iter/traits/iterator/trait.Iterator.html\" title=\"trait core::iter::traits::iterator::Iterator\">Iterator</a>&lt;Item = D::<a class=\"type\" href=\"compression/prelude/trait.Decoder.html#associatedtype.Input\" title=\"type compression::prelude::Decoder::Input\">Input</a>&gt;,<br>&nbsp;&nbsp;&nbsp;&nbsp;D: <a class=\"trait\" href=\"compression/prelude/trait.Decoder.html\" title=\"trait compression::prelude::Decoder\">Decoder</a>,<br>&nbsp;&nbsp;&nbsp;&nbsp;B: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/borrow/trait.BorrowMut.html\" title=\"trait core::borrow::BorrowMut\">BorrowMut</a>&lt;I&gt;,<br>&nbsp;&nbsp;&nbsp;&nbsp;<a class=\"enum\" href=\"compression/prelude/enum.CompressionError.html\" title=\"enum compression::prelude::CompressionError\">CompressionError</a>: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;D::<a class=\"type\" href=\"compression/prelude/trait.Decoder.html#associatedtype.Error\" title=\"type compression::prelude::Decoder::Error\">Error</a>&gt;,&nbsp;</span>",synthetic:false,types:["compression::traits::decoder::DecodeIterator"]},{text:"impl&lt;'_, I, E&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/iter/traits/iterator/trait.Iterator.html\" title=\"trait core::iter::traits::iterator::Iterator\">Iterator</a> for <a class=\"struct\" href=\"compression/prelude/struct.EncodeIterator.html\" title=\"struct compression::prelude::EncodeIterator\">EncodeIterator</a>&lt;'_, I, E&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;I: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/iter/traits/iterator/trait.Iterator.html\" title=\"trait core::iter::traits::iterator::Iterator\">Iterator</a>&lt;Item = E::<a class=\"type\" href=\"compression/prelude/trait.Encoder.html#associatedtype.In\" title=\"type compression::prelude::Encoder::In\">In</a>&gt;,<br>&nbsp;&nbsp;&nbsp;&nbsp;E: <a class=\"trait\" href=\"compression/prelude/trait.Encoder.html\" title=\"trait compression::prelude::Encoder\">Encoder</a>,<br>&nbsp;&nbsp;&nbsp;&nbsp;<a class=\"enum\" href=\"compression/prelude/enum.CompressionError.html\" title=\"enum compression::prelude::CompressionError\">CompressionError</a>: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;E::<a class=\"type\" href=\"compression/prelude/trait.Encoder.html#associatedtype.Error\" title=\"type compression::prelude::Encoder::Error\">Error</a>&gt;,&nbsp;</span>",synthetic:false,types:["compression::traits::encoder::EncodeIterator"]},];

            if (window.register_implementors) {
                window.register_implementors(implementors);
            } else {
                window.pending_implementors = implementors;
            }
        })()