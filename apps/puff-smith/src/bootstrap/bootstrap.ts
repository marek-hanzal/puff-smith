import {dayjs}                  from "@/puff-smith/bootstrap/dayjs";
import type {IAvailableLocales} from "@/puff-smith/bootstrap/locales";
import {
    defaultLocale,
    locales
}                               from "@/puff-smith/bootstrap/locales";

export const bootstrap = async (locale: string) => {
    const $locale = locales[locale as IAvailableLocales] || defaultLocale;
    return {
        dayjs: await dayjs($locale.dayjs),
    };
};
