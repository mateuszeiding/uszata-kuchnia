import { createBrowserRouter } from "react-router-dom";
import App from "./root/app";

export const routerConfig = createBrowserRouter([
	{
		path: "/",
		element: <App />,
		children: [
			{
				index: true,
				element: <div>Elo</div>,
			},
			{
				path: "recipes",
				element: <div>Recipes</div>,
			},
			{
				path: "ingredients",
				element: <div>Ingredients</div>,
			},
		],
	},
]);
