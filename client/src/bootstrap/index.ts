export * from "bootstrap/dayjs";
import {setupLocale} from "bootstrap/dayjs";
import "bootstrap/i18n";
import "bootstrap/noop";
import i18n from "i18next";

export function bootstrap() {
	setupLocale(i18n.language);
}
