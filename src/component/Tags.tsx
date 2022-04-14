import {ITag} from "@/puff-smith/service/tag";
import {Space, SpaceProps, Tag} from "antd";
import {FC} from "react";

export interface ITagsProps extends Partial<SpaceProps> {
	tags: ITag[];
}

export const Tags: FC<ITagsProps> = ({tags, ...props}) => {
	return <Space size={0} {...props}>
		{tags.map(tag => <Tag key={`tag-${tag.id}`}>{tag.code}</Tag>)}
	</Space>;
};
