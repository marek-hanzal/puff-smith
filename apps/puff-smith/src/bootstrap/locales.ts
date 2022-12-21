export interface ILocale {
    dayjs: string;
}

export interface ILocales {
    [index: string]: ILocale;
}

export const locales = {
    "en":    {
        dayjs: "en-gb",
    },
    "en-gb": {
        dayjs: "en-gb",
    },
    "cs":    {
        dayjs: "cs",
    },
} satisfies ILocales;

export type IAvailableLocales = keyof typeof locales;

export const defaultLocale: ILocale = locales["en"];
