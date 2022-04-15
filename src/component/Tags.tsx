import {ITag} from "@/puff-smith/service/tag";
import {Space, SpaceProps, Tag, TagProps} from "antd";
import {FC} from "react";

export interface ITagsProps extends Partial<SpaceProps> {
	tags: ITag[];
	color?: TagProps["color"];
}

export const Tags: FC<ITagsProps> = ({tags, color = "cyan", ...props}) => {
	return <Space size={0} {...props}>
		{tags.map(tag => <Tag
			key={`tag-${tag.id}`}
			color={color}
		>
			{tag.code}
		</Tag>)}
	</Space>;
};
