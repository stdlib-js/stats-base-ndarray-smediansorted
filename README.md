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

<section class="installation">

## Installation

```bash
npm install @stdlib/stats-base-ndarray-smediansorted
```

Alternatively,

-   To load the package in a website via a `script` tag without installation and bundlers, use the [ES Module][es-module] available on the [`esm`][esm-url] branch (see [README][esm-readme]).
-   If you are using Deno, visit the [`deno`][deno-url] branch (see [README][deno-readme] for usage intructions).
-   For use in Observable, or in browser/node environments, use the [Universal Module Definition (UMD)][umd] build available on the [`umd`][umd-url] branch (see [README][umd-readme]).

The [branches.md][branches-url] file summarizes the available branches and displays a diagram illustrating their relationships.

To view installation and usage instructions specific to each branch build, be sure to explicitly navigate to the respective README files on each branch, as linked to above.

</section>

<section class="usage">

## Usage

```javascript
var smediansorted = require( '@stdlib/stats-base-ndarray-smediansorted' );
```

#### smediansorted( arrays )

Computes the median value of a sorted one-dimensional single-precision floating-point ndarray.

```javascript
var Float32Vector = require( '@stdlib/ndarray-vector-float32' );

var x = new Float32Vector( [ 1.0, 2.0, 3.0 ] );

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
var linspace = require( '@stdlib/blas-ext-linspace' );
var ndarray2array = require( '@stdlib/ndarray-to-array' );
var smediansorted = require( '@stdlib/stats-base-ndarray-smediansorted' );

var x = linspace( [ 11 ], 0.0, 10.0, true, {
    'dtype': 'float32'
});
console.log( ndarray2array( x ) );

var v = smediansorted( [ x ] );
console.log( v );
```

</section>

<!-- /.examples -->

<!-- C interface documentation. -->

* * *

<section class="c">

## C APIs

<!-- Section to include introductory text. Make sure to keep an empty line after the intro `section` element and another before the `/section` close. -->

<section class="intro">

</section>

<!-- /.intro -->

<!-- C usage documentation. -->

<section class="usage">

### Usage

```c
#include "stdlib/stats/base/ndarray/smediansorted.h"
```

#### stdlib_stats_smediansorted( arrays )

Computes the median value of a sorted one-dimensional single-precision floating-point ndarray.

```c
#include "stdlib/ndarray/ctor.h"
#include "stdlib/ndarray/dtypes.h"
#include "stdlib/ndarray/index_modes.h"
#include "stdlib/ndarray/orders.h"
#include "stdlib/ndarray/base/bytes_per_element.h"
#include <stdint.h>

// Create an ndarray:
const float data[] = { 1.0f, 2.0f, 3.0f };
int64_t shape[] = { 3 };
int64_t strides[] = { STDLIB_NDARRAY_FLOAT32_BYTES_PER_ELEMENT };
int8_t submodes[] = { STDLIB_NDARRAY_INDEX_ERROR };

struct ndarray *x = stdlib_ndarray_allocate( STDLIB_NDARRAY_FLOAT32, (uint8_t *)data, 1, shape, strides, 0, STDLIB_NDARRAY_ROW_MAJOR, STDLIB_NDARRAY_INDEX_ERROR, 1, submodes );

// Compute the median value:
const struct ndarray *arrays[] = { x };
float v = stdlib_stats_smediansorted( arrays );
// returns 2.0f

// Free allocated memory:
stdlib_ndarray_free( x );
```

The function accepts the following arguments:

-   **arrays**: `[in] struct ndarray**` list containing a sorted one-dimensional input ndarray.

```c
float stdlib_stats_smediansorted( const struct ndarray *arrays[] );
```

</section>

<!-- /.usage -->

<!-- C API usage notes. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="notes">

</section>

<!-- /.notes -->

<!-- C API usage examples. -->

<section class="examples">

### Examples

```c
#include "stdlib/stats/base/ndarray/smediansorted.h"
#include "stdlib/ndarray/ctor.h"
#include "stdlib/ndarray/dtypes.h"
#include "stdlib/ndarray/index_modes.h"
#include "stdlib/ndarray/orders.h"
#include "stdlib/ndarray/base/bytes_per_element.h"
#include <stdint.h>
#include <stdlib.h>
#include <stdio.h>

int main( void ) {
    // Create a sorted data buffer:
    const float data[] = { 1.0f, 2.0f, 3.0f, 4.0f, 5.0f, 6.0f, 7.0f, 8.0f };

    // Specify the number of array dimensions:
    const int64_t ndims = 1;

    // Specify the array shape:
    int64_t shape[] = { 4 };

    // Specify the array strides:
    int64_t strides[] = { 2*STDLIB_NDARRAY_FLOAT32_BYTES_PER_ELEMENT };

    // Specify the byte offset:
    const int64_t offset = 0;

    // Specify the array order:
    const enum STDLIB_NDARRAY_ORDER order = STDLIB_NDARRAY_ROW_MAJOR;

    // Specify the index mode:
    const enum STDLIB_NDARRAY_INDEX_MODE imode = STDLIB_NDARRAY_INDEX_ERROR;

    // Specify the subscript index modes:
    int8_t submodes[] = { STDLIB_NDARRAY_INDEX_ERROR };
    const int64_t nsubmodes = 1;

    // Create an ndarray:
    struct ndarray *x = stdlib_ndarray_allocate( STDLIB_NDARRAY_FLOAT32, (uint8_t *)data, ndims, shape, strides, offset, order, imode, nsubmodes, submodes );
    if ( x == NULL ) {
        fprintf( stderr, "Error allocating memory.\n" );
        exit( 1 );
    }

    // Define a list of ndarrays:
    const struct ndarray *arrays[] = { x };

    // Compute the median value:
    float v = stdlib_stats_smediansorted( arrays );

    // Print the result:
    printf( "median: %f\n", v );

    // Free allocated memory:
    stdlib_ndarray_free( x );
}
```

</section>

<!-- /.examples -->

</section>

<!-- /.c -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->


<section class="main-repo" >

* * *

## Notice

This package is part of [stdlib][stdlib], a standard library for JavaScript and Node.js, with an emphasis on numerical and scientific computing. The library provides a collection of robust, high performance libraries for mathematics, statistics, streams, utilities, and more.

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

[test-image]: https://github.com/stdlib-js/stats-base-ndarray-smediansorted/actions/workflows/test.yml/badge.svg?branch=main
[test-url]: https://github.com/stdlib-js/stats-base-ndarray-smediansorted/actions/workflows/test.yml?query=branch:main

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
