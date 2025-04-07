import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import Router from "./router/Router";
import GlobalProvider from "./context/GlobalProvider";
import "@fontsource/geist-mono";
import "#styles";

const container = document.getElementById("root");
if (!container) {
	throw Error("Element with ID 'root' not found!");
}

const root = createRoot(container);

root.render(
	<StrictMode>
		<GlobalProvider>
			<Router />
		</GlobalProvider>
	</StrictMode>,
);
