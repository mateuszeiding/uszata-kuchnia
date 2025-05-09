import type { PropsWithChildren } from "react";
import { LocalizationContextProvider } from "./LocalizationContext";

export default function GlobalProvider({ children }: PropsWithChildren) {
	return <LocalizationContextProvider>{children}</LocalizationContextProvider>;
}
