module.exports = {
	testMatch: ["**/tests/spec/**/*.js"],
	collectCoverage: true,
	coverageDirectory: "./tests/coverage",
	coverageReporters: [ "html", "text" ],
	coverageThreshold: {
		global: {
			branches: 80,
			functions: 80,
			lines: 80,
			statements: -5
		}
	},
	notify: true,
	verbose: true
};
