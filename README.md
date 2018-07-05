# CBFjs

[![npm](https://img.shields.io/npm/v/cbfjs.svg)](https://www.npmjs.com/package/cbfjs)
[![travis build](https://api.travis-ci.org/lukasmatta/cbfjs.svg?branch=master)](https://travis-ci.org/lukasmatta/cbfjs)
[![Codecov](https://img.shields.io/codecov/c/github/lukasmatta/cbfjs.svg)](https://codecov.io/gh/lukasmatta/cbfjs/)
![npm](https://img.shields.io/npm/l/cbfjs.svg)

Cross-browser fingerprinting library written in JavaScript.

## Installation

To use CBFjs, simply include `dist/cbf.min.js`.

This library requires [core_estimator](https://github.com/oftn-oswg/core-estimator) library for core number estimation. You need to import it manually before importing CBFjs.

CBFjs is also available for download via [npm](https://www.npmjs.com/package/cbfjs).

### npm

```shell
npm install cbfjs
```

## Usage

```js
new CBFjs().get(function(hash, components) {
  console.log(hash) // a hash, representing your device fingerprint
  console.log(components) // an array of CBFjs components
})
```

## Versioning

We use [SemVer](http://semver.org/) for versioning. For the versions available, see the [tags on this repository](https://github.com/lukasmatta/cbfjs/tags).

## Authors

* **Lukas Matta** - *Initial work*

## License

This project is using the Apache LICENSE Version 2.0 - see the [LICENSE.md](LICENSE.md) file for details.

