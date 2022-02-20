import {setupLocale} from "bootstrap/locale";
import "bootstrap/i18n";
import "bootstrap/noop";
import i18n from "i18next";

export interface IBootstrap {
	locale: { antd: any },
}

export async function bootstrap(): Promise<IBootstrap> {
	return {
		locale: await setupLocale(i18n.language),
	}
}
