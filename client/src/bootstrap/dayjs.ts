import dayjs from "dayjs";

dayjs.extend(require("dayjs/plugin/duration"));
dayjs.extend(require("dayjs/plugin/localeData"));
dayjs.extend(require("dayjs/plugin/localizedFormat"));
dayjs.extend(require("dayjs/plugin/relativeTime"));
dayjs.extend(require("dayjs/plugin/utc"));

export const setupLocale = (locale: string) => {
	import(`dayjs/locale/${locale}.js`)
		.then(() => dayjs.locale(locale))
		.catch(_ => console.log(`Cannot import [dayjs/locale/${locale}.js].`));
};
