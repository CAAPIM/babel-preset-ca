# Babel Preset for CA Technologies
[![Commitizen friendly](https://img.shields.io/badge/commitizen-friendly-brightgreen.svg)](http://commitizen.github.io/cz-cli/)
[![dependencies](https://david-dm.org/caapim/babel-preset-ca.svg)](https://david-dm.org/caapim/babel-preset-ca)
[![devDependency Status](https://david-dm.org/caapim/babel-preset-ca/dev-status.svg)](https://david-dm.org/caapim/babel-preset-ca#info=devDependencies)

## Overview
This package provides CA's [Babel](https://babeljs.io/) configurations as an extensible shared preset. This preset is intended to be used in all CA applications that contain ES6/7 JavaScript.

## Installation
` npm install --save-dev babel-preset-ca`

## Usage
Add the following line to your .babelrc file:

```json
{
  "presets": ["ca"]
}
```

## How Can You Contribute
Your contributions are welcome and much appreciated. To learn more, see the [Contribution Guidelines](https://github.com/CAAPIM/babel-preset-ca/blob/master/CONTRIBUTING.md).

This project supports `commitizen`. You can use `npm run commit` to run the local instance of `commitizen` or `git cz` if you have it installed globally.

Alternatively, if you are simply using `git commit`, you must follow this format:
`git commit -m "<type>: <subject>"`

## License
Copyright (c) 2016 CA. All rights reserved.
This software may be modified and distributed under the terms of the MIT license. To learn more, see the [License](https://github.com/CAAPIM/babel-preset-ca/blob/master/LICENSE.md).
