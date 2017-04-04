/**
 * Copyright (c) 2017 CA. All rights reserved.
 * This software may be modified and distributed under the terms
 * of the MIT license. See the LICENSE file for details.
 */

var es2015 = require('babel-preset-es2015');
var es2016 = require('babel-preset-es2016');
var es2017 = require('babel-preset-es2017');
var react = require('babel-preset-react');

var transformDoExpressions = require('babel-plugin-transform-do-expressions');
// add default as it is required to get function
var transformLegacy = require('babel-plugin-transform-decorators-legacy').default;
var transformProperties = require('babel-plugin-transform-class-properties');
var transformSpread = require('babel-plugin-transform-object-rest-spread');

module.exports = {
  presets: [
    es2015,
    es2016,
    es2017,
    react
  ],
  plugins: [
    transformLegacy,
    transformProperties,
    transformDoExpressions,
    transformSpread
  ]
}
