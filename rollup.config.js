module.exports = {
	input: "src/index.js",
	plugins: [require("rollup-plugin-babel")()],
	output: {
		format: "cjs",
		file: "./build/index.js",
		name: "test",
		exports: "default",
		sourcemap: true
	}
};
