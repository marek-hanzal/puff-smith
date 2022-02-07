import {FC} from "react";
import {Tag, TagProps} from "antd";
import {useTranslation} from "react-i18next";

export interface IPreviewTagProps extends Partial<TagProps> {
	label?: string;
}

export const PreviewTag: FC<IPreviewTagProps> = ({label, children, ...props}) => {
	const {t} = useTranslation();
	return <Tag
		style={{padding: '4px 16px', fontSize: 14}}
		color={'blue'}
		{...props}
	>
		{label ? t(label) : children}
	</Tag>
}
