import { NavLink } from "react-router-dom";

export default function () {
	return (
		<>
			<MenuOption label="Przepisy" route="recipes" />
			<MenuOption label="Składniki" route="ingredients" />
		</>
	);
}

type MenuOption = {
	label: string;
	route: string;
};

function MenuOption({ ...props }: Readonly<MenuOption>) {
	return (
		<NavLink
			className="menu-link"
			to={props?.route ?? props.label.toLowerCase()}
		>
			{props.label}
		</NavLink>
	);
}
