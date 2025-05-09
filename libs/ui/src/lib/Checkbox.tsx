import { cls } from "#utils";
import { useId, useRef, type InputHTMLAttributes } from "react";

type Checkbox = {
	label: string;
	crossed?: boolean;
	switch?: boolean;
} & InputHTMLAttributes<HTMLInputElement>;

export default function ({ ...props }: Readonly<Checkbox>) {
	const id = useId();
	const ref = useRef<HTMLInputElement>(undefined);
	return (
		<div className="d-flex flex-row align-items-center g-col-3">
			<input
				id={id}
				ref={ref}
				{...{ ...props }}
				type="checkbox"
				role={props.switch ? "switch" : "checkbox"}
				aria-checked={ref.current?.checked}
				className={cls("checkbox", props.crossed && "crossed", props.className)}
			/>
			<label htmlFor={id}>{props.label}</label>
		</div>
	);
}
