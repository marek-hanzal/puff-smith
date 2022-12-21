import {dayjs}                  from "@/puff-smith/bootstrap/dayjs";
import {i18n}                   from "@/puff-smith/bootstrap/i18n";
import type {IAvailableLocales} from "@/puff-smith/bootstrap/locales";
import {
    defaultLocale,
    locales
}                               from "@/puff-smith/bootstrap/locales";

export const bootstrap = async () => {
    const $i18n = await i18n();
    return {
        i18n:  $i18n,
        dayjs: await dayjs((locales[$i18n.language as IAvailableLocales] || defaultLocale).dayjs),
    };
};
