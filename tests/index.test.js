"use strict";

const createConfig = require("razzle/config/createConfig");
const pluginFunc = require("../index");

describe("razzle-plugin-graphql-tag", () => {
	describe("when environment set to development", () => {
		let config;

		beforeAll(() => {
			config = createConfig("web", "dev", {
				plugins: [{ func: pluginFunc }]
			});
		});

		it("should add graphql-tag/loader", () => {
			expect(
				config.module.rules.find(rule => {
					if (rule && rule.use && rule.use.length > 0) {
						return /graphql-tag\/loader/gi.test(rule.use[0].loader);
					}
				})
			).not.toBeUndefined();
		});
	});

	describe("when environment set to production", () => {
		let config;

		beforeAll(() => {
			config = createConfig("web", "prod", {
				plugins: [{ func: pluginFunc }]
			});
		});

		it("should add graphql-tag/loader", () => {
			expect(
				config.module.rules.find(rule => {
					if (rule && rule.use && rule.use.length > 0) {
						return /graphql-tag\/loader/gi.test(rule.use[0].loader);
					}
				})
			).not.toBeUndefined();
		});
	});
});

describe("when creating a node config", () => {
	let config;

	beforeAll(() => {
		config = createConfig("node", "prod", {
			plugins: [{ func: pluginFunc }]
		});
	});

	it("should add graphql-tag/loader", () => {
		expect(
			config.module.rules.find(rule => {
				if (rule && rule.use && rule.use.length > 0) {
					return /graphql-tag\/loader/gi.test(rule.use[0].loader);
				}
			})
		).not.toBeUndefined();
	});
});
