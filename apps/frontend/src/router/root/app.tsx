import { Button, Checkbox } from "#ui";
import { cls } from "#utils";

export default function App() {
	return (
		<main className="grid">
			<div className="row">
				<div
					className={cls(
						"col-12",
						"d-flex flex-column align-items-end",
						"txt-size-8 txt-lh-small txt-weight-1",
					)}
				>
					<div>Uszata</div>
					<div>Kuchnia</div>
				</div>
			</div>
		</main>
	);
}
