import dayjs from "dayjs";
import moment from "moment";
import enEN from 'antd/lib/locale/en_US';
import localeMap from './locale.json';

dayjs.extend(require("dayjs/plugin/duration"));
dayjs.extend(require("dayjs/plugin/localeData"));
dayjs.extend(require("dayjs/plugin/localizedFormat"));
dayjs.extend(require("dayjs/plugin/relativeTime"));
dayjs.extend(require("dayjs/plugin/utc"));

export const setupLocale = async (language: string): Promise<{ antd: any }> => {
	const locale = (localeMap as any)[language] || {'short': 'en', 'long': 'en_US'};
	return new Promise<{ antd: any }>(resolver => {
		import(`dayjs/locale/${locale.short}.js`)
			.then(() => dayjs.locale(locale.short))
			.catch(_ => console.log(`Cannot import [dayjs/locale/${locale.short}.js].`));
		import(`moment/locale/${locale.short}.js`)
			.then(() => moment.locale(locale.short))
			.catch(_ => console.log(`Cannot import [moment/locale/${locale.short}.js].`));
		import(`antd/lib/locale/${locale.long}.js`)
			.then(antd => resolver({antd: antd.default}))
			.catch(e => {
				console.error(e);
				resolver({antd: enEN});
			});
	});
};
