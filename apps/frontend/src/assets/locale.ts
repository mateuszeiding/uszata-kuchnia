enum LocaleEnum {
	PL = 1,
	EN = 2,
}

type NoUndefined<T> = {
	[K in keyof T]: Exclude<T[K], undefined>;
};

interface Locale<T> {
	[key: number]: NoUndefined<T>;
}

const defineTranslations = <T>(locale: Locale<T>) => locale;

const LOCALE = defineTranslations({
	[LocaleEnum.PL]: {
		menu: {
			recipies: "przepisy",
			ingredients: "składniki",
		},
	},
	[LocaleEnum.EN]: {
		menu: {
			recipies: "recipies",
			ingredients: "ingredients",
		},
	},
});

export { LocaleEnum, LOCALE };
