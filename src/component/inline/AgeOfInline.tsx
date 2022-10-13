import {ClockCircleOutlined} from "@ant-design/icons";
import {durationOf}          from "@leight-core/viv";
import {
	Space,
	Tooltip,
	Typography
}                            from "antd";
import {ConfigType}          from "dayjs";
import {FC}                  from "react";
import {useTranslation}      from "react-i18next";

export interface IAgeOfInlineProps {
	date?: ConfigType;
	tooltip?: string;
}

export const AgeOfInline: FC<IAgeOfInlineProps> = ({date, tooltip}) => {
	const {t} = useTranslation();
	if (!date) {
		return <>-</>;
	}
	return <Tooltip title={tooltip && t(tooltip)}>
		<Space>
			<Typography.Text type={"secondary"}>
				<ClockCircleOutlined/>
			</Typography.Text>
			<Typography.Text>
				{durationOf(date).humanize()}
			</Typography.Text>
		</Space>
	</Tooltip>;
};
