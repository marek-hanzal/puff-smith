import {FC} from "react";
import {Space, Tooltip, Typography} from "antd";
import {useTranslation} from "react-i18next";

export interface IContentInlineProps {
	content?: number;
	tooltip?: string;
}

export const ContentInline: FC<IContentInlineProps> = ({content, tooltip}) => {
	const {t} = useTranslation();
	return content ? <Tooltip title={tooltip && t(tooltip)}><Space size={4}>
		<Typography.Text>{content}</Typography.Text>
		<Typography.Text type={'secondary'}>ml</Typography.Text>
	</Space></Tooltip> : <>-</>;
}
