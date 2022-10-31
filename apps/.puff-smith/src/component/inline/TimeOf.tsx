import {FieldTimeOutlined} from "@ant-design/icons";
import {durationOf}        from "@leight-core/viv";
import {
    Space,
    Tooltip,
    Typography
}                          from "antd";
import {ConfigType}        from "dayjs";
import {FC}                from "react";
import {useTranslation}    from "react-i18next";

export interface ITimeOfProps {
	date: ConfigType;
	tooltip?: string;
}

export const TimeOf: FC<ITimeOfProps> = ({date, tooltip}) => {
	const {t} = useTranslation();
	return <Tooltip title={t(tooltip || "common.time-of.tooltip")}>
		<Space size={4}>
			<Typography.Text><FieldTimeOutlined/></Typography.Text>
			<Typography.Text>{durationOf(date).humanize()}</Typography.Text>
		</Space>
	</Tooltip>;
};
