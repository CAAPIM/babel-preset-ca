/**
 * Copyright (c) 2017 CA. All rights reserved.
 * This software may be modified and distributed under the terms
 * of the MIT license. See the LICENSE file for details.
 */

var env = require('babel-preset-env');
var react = require('babel-preset-react');

var transformSpread = require('babel-plugin-transform-object-rest-spread');
var transformProperties = require('babel-plugin-transform-class-properties');
var syntaxDynamicImport = require('babel-plugin-syntax-dynamic-import');
var transformReactJsx = require('babel-plugin-transform-react-jsx');

module.exports = {
  presets: [
    env,
    react
  ],
  plugins: [
    transformSpread,
    transformProperties,
    syntaxDynamicImport,
    transformReactJsx
  ]
}
