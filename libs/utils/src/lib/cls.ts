export default function (
	...classes: (string | string[] | boolean | undefined)[]
): string {
	return classes.flat().filter(Boolean).join(" ");
}
