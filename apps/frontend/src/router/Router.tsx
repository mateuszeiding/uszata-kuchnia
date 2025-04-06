import { RouterProvider } from "react-router-dom";
import { routerConfig } from "./config";

export default function Router() {
	return <RouterProvider router={routerConfig} />;
}
