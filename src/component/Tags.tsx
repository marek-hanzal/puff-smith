import {ITag} from "@/puff-smith/service/tag/interface";
import {Tag, TagProps, Typography} from "antd";
import {FC} from "react";
import {useTranslation} from "react-i18next";

export interface ITagsProps {
	tags: ITag[];
	color?: TagProps["color"];
	translation?: string;
}

export const Tags: FC<ITagsProps> = ({tags, translation, color = "cyan"}) => {
	const {t} = useTranslation();
	return tags.length ? <span>
		{tags.map(tag => <Tag
			key={`tag-${tag.id}`}
			color={color}
			style={{margin: "0.4em 0.4em"}}
		>
			{translation ? t(`${translation}.${tag.code}`) : tag.code}
		</Tag>)}
	</span> : (translation ? <Typography.Text type={"secondary"}>{t(`${translation}.empty`)}</Typography.Text> : null);
};
