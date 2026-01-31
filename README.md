<!--

@license Apache-2.0

Copyright (c) 2025 The Stdlib Authors.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

-->


<details>
  <summary>
    About stdlib...
  </summary>
  <p>We believe in a future in which the web is a preferred environment for numerical computation. To help realize this future, we've built stdlib. stdlib is a standard library, with an emphasis on numerical and scientific computation, written in JavaScript (and C) for execution in browsers and in Node.js.</p>
  <p>The library is fully decomposable, being architected in such a way that you can swap out and mix and match APIs and functionality to cater to your exact preferences and use cases.</p>
  <p>When you use stdlib, you can be absolutely certain that you are using the most thorough, rigorous, well-written, studied, documented, tested, measured, and high-quality code out there.</p>
  <p>To join us in bringing numerical computing to the web, get started by checking us out on <a href="https://github.com/stdlib-js/stdlib">GitHub</a>, and please consider <a href="https://opencollective.com/stdlib">financially supporting stdlib</a>. We greatly appreciate your continued support!</p>
</details>

# smediansorted

[![NPM version][npm-image]][npm-url] [![Build Status][test-image]][test-url] [![Coverage Status][coverage-image]][coverage-url] <!-- [![dependencies][dependencies-image]][dependencies-url] -->

> Compute the median value of a sorted one-dimensional single-precision floating-point ndarray.

<section class="intro">

</section>

<!-- /.intro -->



<section class="usage">

## Usage

```javascript
import smediansorted from 'https://cdn.jsdelivr.net/gh/stdlib-js/stats-base-ndarray-smediansorted@deno/mod.js';
```
The previous example will load the latest bundled code from the deno branch. Alternatively, you may load a specific version by loading the file from one of the [tagged bundles](https://github.com/stdlib-js/stats-base-ndarray-smediansorted/tags). For example,

```javascript
import smediansorted from 'https://cdn.jsdelivr.net/gh/stdlib-js/stats-base-ndarray-smediansorted@v0.1.0-deno/mod.js';
```

#### smediansorted( arrays )

Computes the median value of a sorted one-dimensional single-precision floating-point ndarray.

```javascript
import Float32Array from 'https://cdn.jsdelivr.net/gh/stdlib-js/array-float32@deno/mod.js';
import ndarray from 'https://cdn.jsdelivr.net/gh/stdlib-js/ndarray-base-ctor@deno/mod.js';

var xbuf = new Float32Array( [ 1.0, 2.0, 3.0 ] );
var x = new ndarray( 'float32', xbuf, [ 3 ], [ 1 ], 0, 'row-major' );

var v = smediansorted( [ x ] );
// returns 2.0
```

The function has the following parameters:

-   **arrays**: array-like object containing a sorted one-dimensional input ndarray.

</section>

<!-- /.usage -->

<section class="notes">

## Notes

-   If provided an empty ndarray, the function returns `NaN`.
-   The one-dimensional input ndarray must be sorted in either **strictly** ascending or descending order.

</section>

<!-- /.notes -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
import linspace from 'https://cdn.jsdelivr.net/gh/stdlib-js/array-linspace@deno/mod.js';
import ndarray from 'https://cdn.jsdelivr.net/gh/stdlib-js/ndarray-base-ctor@deno/mod.js';
import ndarray2array from 'https://cdn.jsdelivr.net/gh/stdlib-js/ndarray-to-array@deno/mod.js';
import smediansorted from 'https://cdn.jsdelivr.net/gh/stdlib-js/stats-base-ndarray-smediansorted@deno/mod.js';

// Create a linearly spaced sorted array:
var xbuf = linspace( 0.0, 10.0, 11, {
    'dtype': 'float32'
});

var x = new ndarray( 'float32', xbuf, [ xbuf.length ], [ 1 ], 0, 'row-major' );
console.log( ndarray2array( x ) );

var v = smediansorted( [ x ] );
console.log( v );
```

</section>

<!-- /.examples -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->


<section class="main-repo" >

* * *

## Notice

This package is part of [stdlib][stdlib], a standard library with an emphasis on numerical and scientific computing. The library provides a collection of robust, high performance libraries for mathematics, statistics, streams, utilities, and more.

For more information on the project, filing bug reports and feature requests, and guidance on how to develop [stdlib][stdlib], see the main project [repository][stdlib].

#### Community

[![Chat][chat-image]][chat-url]

---

## License

See [LICENSE][stdlib-license].


## Copyright

Copyright &copy; 2016-2026. The Stdlib [Authors][stdlib-authors].

</section>

<!-- /.stdlib -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[npm-image]: http://img.shields.io/npm/v/@stdlib/stats-base-ndarray-smediansorted.svg
[npm-url]: https://npmjs.org/package/@stdlib/stats-base-ndarray-smediansorted

[test-image]: https://github.com/stdlib-js/stats-base-ndarray-smediansorted/actions/workflows/test.yml/badge.svg?branch=v0.1.0
[test-url]: https://github.com/stdlib-js/stats-base-ndarray-smediansorted/actions/workflows/test.yml?query=branch:v0.1.0

[coverage-image]: https://img.shields.io/codecov/c/github/stdlib-js/stats-base-ndarray-smediansorted/main.svg
[coverage-url]: https://codecov.io/github/stdlib-js/stats-base-ndarray-smediansorted?branch=main

<!--

[dependencies-image]: https://img.shields.io/david/stdlib-js/stats-base-ndarray-smediansorted.svg
[dependencies-url]: https://david-dm.org/stdlib-js/stats-base-ndarray-smediansorted/main

-->

[chat-image]: https://img.shields.io/badge/zulip-join_chat-brightgreen.svg
[chat-url]: https://stdlib.zulipchat.com

[stdlib]: https://github.com/stdlib-js/stdlib

[stdlib-authors]: https://github.com/stdlib-js/stdlib/graphs/contributors

[umd]: https://github.com/umdjs/umd
[es-module]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules

[deno-url]: https://github.com/stdlib-js/stats-base-ndarray-smediansorted/tree/deno
[deno-readme]: https://github.com/stdlib-js/stats-base-ndarray-smediansorted/blob/deno/README.md
[umd-url]: https://github.com/stdlib-js/stats-base-ndarray-smediansorted/tree/umd
[umd-readme]: https://github.com/stdlib-js/stats-base-ndarray-smediansorted/blob/umd/README.md
[esm-url]: https://github.com/stdlib-js/stats-base-ndarray-smediansorted/tree/esm
[esm-readme]: https://github.com/stdlib-js/stats-base-ndarray-smediansorted/blob/esm/README.md
[branches-url]: https://github.com/stdlib-js/stats-base-ndarray-smediansorted/blob/main/branches.md

[stdlib-license]: https://raw.githubusercontent.com/stdlib-js/stats-base-ndarray-smediansorted/main/LICENSE

</section>

<!-- /.links -->
