import {
    toLocalDate,
    toLocalDateTime
}                       from "@leight-core/viv";
import {Tooltip}        from "antd";
import {ConfigType}     from "dayjs";
import {FC}             from "react";
import {useTranslation} from "react-i18next";

export interface ILocalDateProps {
	date: ConfigType;
	tooltip?: string;
}

export const LocalDate: FC<ILocalDateProps> = ({date, tooltip}) => {
	const {t}   = useTranslation();
	const local = toLocalDateTime(date);
	return <Tooltip title={tooltip ? t(tooltip, {data: {date: local}}) : local}>
		{toLocalDate(date)}
	</Tooltip>;
};
