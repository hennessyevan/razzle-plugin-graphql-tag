"use strict";

const makeLoaderFinder = require("razzle-dev-utils/makeLoaderFinder");

'use strict';
module.exports = {
  modifyWebpackConfig({
    webpackConfig
  }) {
	webpackConfig.resolve.extensions.push(".graphql", ".gql");

	webpackConfig.module.rules.push({
		test: /\.(graphql|gql)$/,
		exclude: /node_modules/,
		loader: "graphql-tag/loader"
	});

	webpackConfig.module.rules[webpackConfig.module.rules.findIndex(makeLoaderFinder("file-loader"))].exclude.push(/\.(graphql|gql)$/);

	return webpackConfig;
  }
};