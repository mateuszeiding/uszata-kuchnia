import { createBrowserRouter } from "react-router-dom";
import App from "./root/app";

export const routerConfig = createBrowserRouter([
	{
		path: "/",
		element: <App />,
	},
]);
