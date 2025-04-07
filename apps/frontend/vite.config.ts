import { nxCopyAssetsPlugin } from "@nx/vite/plugins/nx-copy-assets.plugin";
import { nxViteTsPaths } from "@nx/vite/plugins/nx-tsconfig-paths.plugin";
import react from "@vitejs/plugin-react";
import path from "node:path";
/// <reference types='vitest' />
import { defineConfig } from "vite";

export default defineConfig(() => ({
	root: __dirname,
	cacheDir: "../../node_modules/.vite/apps/frontend",
	server: {
		port: 4200,
		host: "localhost",
	},
	preview: {
		port: 4300,
		host: "localhost",
	},
	resolve: {
		alias: {
			"#styles": path.resolve(__dirname, "../../libs/styles/src/index.scss"),
		},
	},
	plugins: [react(), nxViteTsPaths(), nxCopyAssetsPlugin(["*.md"])],
	// Uncomment this if you are using workers.
	// worker: {
	//  plugins: [ nxViteTsPaths() ],
	// },
	build: {
		outDir: "../../dist/apps/frontend",
		emptyOutDir: true,
		reportCompressedSize: true,
		commonjsOptions: {
			transformMixedEsModules: true,
		},
	},
	test: {
		watch: false,
		globals: true,
		environment: "jsdom",
		include: ["{src,tests}/**/*.{test,spec}.{js,mjs,cjs,ts,mts,cts,jsx,tsx}"],
		reporters: ["default"],
		coverage: {
			reportsDirectory: "../../coverage/apps/frontend",
			provider: "v8" as const,
		},
	},
}));
