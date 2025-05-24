import { MenuLink } from "#ui";
import { cls } from "#utils";
import { Outlet } from "react-router-dom";
import { useLocalizationContext } from "../../context/LocalizationContext";

export default function App() {
	const { locale } = useLocalizationContext();
	return (
		<main className="grid">
			<div className="col-9">
				<div className="container">
					<Outlet />
				</div>
			</div>
			<aside
				className={cls(
					"col-3",
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
					<MenuLink
						label={locale.menu.recipies.toFirstUpperCase()}
						route="recipies"
					/>
					<MenuLink
						label={locale.menu.ingredients.toFirstUpperCase()}
						route="ingredients"
					/>
				</nav>
			</aside>
		</main>
	);
}
