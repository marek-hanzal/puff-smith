import {ITag} from "@/puff-smith/service/tag";
import {Space, SpaceProps, Tag, TagProps} from "antd";
import {FC} from "react";
import {useTranslation} from "react-i18next";

export interface ITagsProps extends Partial<SpaceProps> {
	tags: ITag[];
	color?: TagProps["color"];
	translation?: string;
}

export const Tags: FC<ITagsProps> = ({tags, translation, color = "cyan", ...props}) => {
	const {t} = useTranslation();
	return tags.length ? <Space size={0} {...props}>
		{tags.map(tag => <Tag
			key={`tag-${tag.id}`}
			color={color}
		>
			{translation ? t(`${translation}.${tag.code}`) : tag.code}
		</Tag>)}
	</Space> : null;
};
