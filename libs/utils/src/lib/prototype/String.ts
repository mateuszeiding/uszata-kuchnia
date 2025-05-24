export {};

declare global {
	interface String {
		toFirstUpperCase(): string;
	}
}

String.prototype.toFirstUpperCase = function (this: string) {
	return this[0].toUpperCase() + this.slice(1);
};
