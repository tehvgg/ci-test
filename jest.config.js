module.exports = {
	testMatch: ["**/tests/spec/**/*.js"],
	collectCoverage: true,
	coverageDirectory: "./tests/coverage/",
	coverageReporters: ["html", "text"],
	coverageThreshold: {
		global: {
			branches: 0,
			functions: 90,
			lines: 90,
			statements: -5
		}
	},
	notify: true,
	verbose: true
};
