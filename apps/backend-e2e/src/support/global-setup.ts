// biome-ignore lint/style/noVar: From NX init setup
var __TEARDOWN_MESSAGE__: string;

module.exports = async () => {
	// Start services that that the app needs to run (e.g. database, docker-compose, etc.).
	console.log("\nSetting up...\n");

	// Hint: Use `globalThis` to pass variables to global teardown.
	globalThis.__TEARDOWN_MESSAGE__ = "\nTearing down...\n";
};
