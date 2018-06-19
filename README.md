# CBFjs
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
  console.log(result) // a hash, representing your device fingerprint
  console.log(components) // an array of CBFjs components
})
```

## Versioning

We use [SemVer](http://semver.org/) for versioning. For the versions available, see the [tags on this repository](https://github.com/your/project/tags). 

## Authors

* **Lukas Matta** - *Initial work*

## License

This project is using the Apache LICENSE Version 2.0 - see the [LICENSE.md](LICENSE.md) file for details.

