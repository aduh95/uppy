# @uppy/locales

<img src="https://uppy.io/images/logos/uppy-dog-head-arrow.svg" width="120" alt="Uppy logo: a superman puppy in a pink suit" align="right">

[![npm version](https://img.shields.io/npm/v/@uppy/locales.svg?style=flat-square)](https://www.npmjs.com/package/@uppy/locales)
![CI status for Uppy tests](https://github.com/transloadit/uppy/workflows/Tests/badge.svg)
![CI status for Companion tests](https://github.com/transloadit/uppy/workflows/Companion/badge.svg)
![CI status for browser tests](https://github.com/transloadit/uppy/workflows/End-to-end%20tests/badge.svg)

This package includes all the locale packs that you can use to make Uppy speak your language! If your language is missing, please consider [contributing](https://github.com/transloadit/uppy/tree/master/packages/%40uppy/locales/src), starting with `en_US`, which is always up-to-date automatically.

## Installation

```bash
$ npm install @uppy/locales
```

## Documentation

```bash
$ npm install @uppy/core @uppy/locales
```

```js
import Uppy from '@uppy/core'
import Russian from '@uppy/locales/lib/ru_RU'

const uppy = new Uppy({
  debug: true,
  meta: {
    username: 'John',
    license: 'Creative Commons',
  },
  locale: Russian,
})
```

Please see [locale docs](https://uppy.io/docs/uppy/#locale) for more details.

## License

[The MIT License](./LICENSE).
