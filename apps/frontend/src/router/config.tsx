import { createBrowserRouter } from "react-router-dom";
import App from "../app/app";

export const routerConfig = createBrowserRouter([
	{
		path: "/",
		element: <App />,
	},
]);
