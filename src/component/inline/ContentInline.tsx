import {QuestionCircleOutlined} from "@ant-design/icons";
import {toHumanNumber}          from "@leight-core/utils";
import {
	Space,
	Tooltip,
	Typography
}                               from "antd";
import {FC}                     from "react";
import {useTranslation}         from "react-i18next";

export interface IContentInlineProps {
	content?: number | null;
	max?: number | null;
	tooltip?: string;
}

export const ContentInline: FC<IContentInlineProps> = ({content, max, tooltip}) => {
	const {t}   = useTranslation();
	const isMax = max && content && content > max;
	return content ? <Tooltip title={tooltip && t(tooltip)}><Space size={4}>
		<Typography.Text type={isMax ? "danger" : undefined}>{toHumanNumber(content)}</Typography.Text>
		<Typography.Text type={isMax ? "danger" : "secondary"}>ml</Typography.Text>
		{tooltip && <QuestionCircleOutlined/>}
	</Space></Tooltip> : <>-</>;
};
