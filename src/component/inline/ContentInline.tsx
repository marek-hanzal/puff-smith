import {toHumanNumber} from "@leight-core/client";
import {Space, Tooltip, Typography} from "antd";
import {FC} from "react";
import {useTranslation} from "react-i18next";

export interface IContentInlineProps {
	content?: number | null;
	tooltip?: string;
}

export const ContentInline: FC<IContentInlineProps> = ({content, tooltip}) => {
	const {t} = useTranslation();
	return content ? <Tooltip title={tooltip && t(tooltip)}><Space size={4}>
		<Typography.Text>{toHumanNumber(content, 2)}</Typography.Text>
		<Typography.Text type={"secondary"}>ml</Typography.Text>
	</Space></Tooltip> : <>-</>;
};
