import {FieldTimeOutlined} from "@ant-design/icons";
import {durationOf}        from "@leight-core/client";
import {
	Space,
	Tooltip,
	Typography
}                          from "antd";
import {ConfigType}        from "dayjs";
import {FC}                from "react";
import {useTranslation}    from "react-i18next";

export interface IDurationOfProps {
	start: ConfigType;
	end: ConfigType;
	tooltip?: string;
}

export const DurationOf: FC<IDurationOfProps> = ({start, end, tooltip}) => {
	const {t} = useTranslation();
	return <Tooltip title={t(tooltip || "common.duration-of.tooltip")}>
		<Space size={4}>
			<Typography.Text><FieldTimeOutlined/></Typography.Text>
			<Typography.Text>{durationOf(end, start).humanize()}</Typography.Text>
		</Space>
	</Tooltip>;
};
