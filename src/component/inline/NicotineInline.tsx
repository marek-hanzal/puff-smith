import {QuestionCircleOutlined} from "@ant-design/icons";
import {toHumanNumber} from "@leight-core/client";
import {Space, Tooltip, Typography} from "antd";
import {FC} from "react";
import {useTranslation} from "react-i18next";

export interface INicotineInlineProps {
	nicotine?: number | null;
	tooltip?: string;
}

export const NicotineInline: FC<INicotineInlineProps> = ({nicotine, tooltip}) => {
	const {t} = useTranslation();
	return nicotine != null ? <Tooltip title={tooltip && t(tooltip)}><Space size={4}>
		<Typography.Text>{toHumanNumber(nicotine, 2)}</Typography.Text>
		<Typography.Text type={"secondary"}>mg</Typography.Text>
		{tooltip && <QuestionCircleOutlined/>}
	</Space></Tooltip> : <>-</>;
};
