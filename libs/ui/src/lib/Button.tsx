import type { ButtonHTMLAttributes } from "react";
import { cls } from "#utils";

type Button = {
	label: string;
} & ButtonHTMLAttributes<HTMLButtonElement>;

export default function ({ ...args }: Button) {
	return (
		<button {...{ ...args }} className={cls("btn", args.className)}>
			{args.label}
		</button>
	);
}
