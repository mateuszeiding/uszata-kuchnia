import {
	createContext,
	useContext,
	useMemo,
	useState,
	type PropsWithChildren,
} from "react";
import { LOCALE, LocaleEnum } from "../assets/locale";

type Localization = {
	[key: string]: string | Localization;
};

type LocalizationContext = {
	locale: Localization;
	changeLanguage: (key: LocaleEnum) => void;
	getLanguage: () => LocaleEnum;
};

const LocalizationContext = createContext<LocalizationContext | undefined>(
	undefined,
);

export function LocalizationContextProvider({
	children,
}: Readonly<PropsWithChildren>) {
	const [lang, setLang] = useState<LocaleEnum>(LocaleEnum.PL);
	const [locale, setLocale] = useState(LOCALE[lang]);

	const value = useMemo(() => {
		const getLanguage = () => lang;
		const changeLanguage = (key: LocaleEnum) => {
			setLang(key);
			setLocale(LOCALE[key]);
		};

		return { locale, changeLanguage, getLanguage };
	}, [locale, lang]);

	return (
		<LocalizationContext.Provider value={value}>
			{children}
		</LocalizationContext.Provider>
	);
}

export function useLocalizationContext() {
	const ctx = useContext(LocalizationContext);
	if (!ctx) {
		const err =
			"useLocalizationContext must be used within the <LocalizationContextProvider>";
		console.error(err);
		throw new Error(err);
	}

	return ctx;
}
