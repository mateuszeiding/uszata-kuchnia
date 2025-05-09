import type { ButtonHTMLAttributes } from "react";
import { cls } from "#utils";

type Button = {
	label: string;
} & ButtonHTMLAttributes<HTMLButtonElement>;

export default function ({ ...props }: Button) {
	return (
		<button {...{ ...props }} className={cls("btn", props.className)}>
			{props.label}
		</button>
	);
}
