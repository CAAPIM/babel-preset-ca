/**
 * Copyright (c) 2017 CA. All rights reserved.
 * This software may be modified and distributed under the terms
 * of the MIT license. See the LICENSE file for details.
 */

var env = require('babel-preset-env');
var react = require('babel-preset-react');

var transformDoExpressions = require('babel-plugin-transform-do-expressions');
// add default as it is required to get function
var transformLegacy = require('babel-plugin-transform-decorators-legacy').default;
var transformProperties = require('babel-plugin-transform-class-properties');
var transformSpread = require('babel-plugin-transform-object-rest-spread');

module.exports = {
  presets: [
    env,
    react
  ],
  plugins: [
    transformLegacy,
    transformProperties,
    transformDoExpressions,
    transformSpread
  ]
}
