import { cls } from "#utils";
import { useId, type InputHTMLAttributes } from "react";

type Checkbox = {
	label: string;
} & InputHTMLAttributes<HTMLInputElement>;

export default function ({ ...args }: Checkbox) {
	const id = useId();
	return (
		<div className="d-flex flex-row align-items-center g-col-3">
			<input
				id={id}
				{...{ ...args }}
				type="checkbox"
				className={cls("checkbox", args.className)}
			/>
			<label htmlFor={id}>{args.label}</label>
		</div>
	);
}
