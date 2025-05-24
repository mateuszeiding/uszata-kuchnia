import { NavLink } from "react-router-dom";

type MenuOption = {
	label: string;
	route: string;
};

export default function ({ ...props }: Readonly<MenuOption>) {
	return (
		<NavLink
			className="menu-link"
			to={props?.route ?? props.label.toLowerCase()}
		>
			{props.label}
		</NavLink>
	);
}
