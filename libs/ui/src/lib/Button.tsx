import type { ButtonHTMLAttributes } from "react";
import { cls } from "#utils";

type Button = {
	label: string;
	class?: string[];
} & ButtonHTMLAttributes<HTMLButtonElement>;

export default function ({ ...args }: Button) {
	return (
		<button {...{ ...args }} className={cls("btn", args.class)}>
			{args.label}
		</button>
	);
}
