import {ThunderboltOutlined} from "@ant-design/icons";
import {toHumanNumber}       from "@leight-core/viv";
import {
	Space,
	Tooltip,
	Typography
}                            from "antd";
import {FC}                  from "react";
import {useTranslation}      from "react-i18next";

export interface INicotineInlineProps {
	nicotine?: number | null;
	tooltip?: string;
}

export const NicotineInline: FC<INicotineInlineProps> = ({nicotine, tooltip}) => {
	const {t} = useTranslation();
	return nicotine != null ? <Tooltip title={tooltip && t(tooltip)}><Space size={4}>
		<ThunderboltOutlined/>
		<Typography.Text>{toHumanNumber(nicotine, "-", 4)}</Typography.Text>
		<Typography.Text type={"secondary"}>mg</Typography.Text>
	</Space></Tooltip> : <>-</>;
};
