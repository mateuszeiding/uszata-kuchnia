import { Menu } from "#ui";
import { cls } from "#utils";
import { Outlet } from "react-router-dom";

export default function App() {
	return (
		<main className="grid">
			<div className="col-8">
				<div className="container">
					<Outlet />
				</div>
			</div>
			<aside
				className={cls(
					"col-4",
					"txt-size-8 txt-lh-small txt-weight-1",
					"border-left",
				)}
			>
				<div
					className={cls("py-7", "d-flex flex-column align-items-end flex-1")}
				>
					<div>Uszata</div>
					<div>Kuchnia</div>
				</div>
				<nav>
					<Menu />
				</nav>
			</aside>
		</main>
	);
}
