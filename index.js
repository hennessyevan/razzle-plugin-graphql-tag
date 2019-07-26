"use strict";

const makeLoaderFinder = require("razzle-dev-utils/makeLoaderFinder");

module.exports = function modify(defaultConfig) {
	const config = Object.assign({}, defaultConfig);
	config.resolve.extensions.push(".graphql", ".gql");

	config.module.rules.push({
		test: /\.(graphql|gql)$/,
		exclude: /node_modules/,
		loader: "graphql-tag/loader"
	});

	config.module.rules[config.module.rules.findIndex(makeLoaderFinder("file-loader"))].exclude.push(/\.(graphql|gql)$/);

	return config;
};
