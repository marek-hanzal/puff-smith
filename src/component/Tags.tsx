import {FC} from "react";
import {Tag, TagProps} from "antd";
import {useTranslation} from "react-i18next";

type TagDto = any;

export interface ITagsProps extends Partial<TagProps> {
	tags?: TagDto[];
}

export const Tags: FC<ITagsProps> = ({tags = [], ...props}) => {
	const {t} = useTranslation();
	return <>
		{tags.map(tag => <Tag
			style={{padding: '2px 6px', margin: '2px'}}
			key={tag.id}
			color={'blue'}
			{...props}
		>
			{t('tag.' + tag.code, tag.label)}
		</Tag>)}
	</>
}
