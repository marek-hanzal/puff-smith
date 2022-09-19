import {SelectionBool} from "@/puff-smith/component/inline/SelectionBool";
import {ITagInfiniteListSourceProps, TagInfiniteListSource} from "@/sdk/api/tag/query";
import {ListItem, ListItemMeta, useOptionalSelectionContext} from "@leight-core/client";
import {Typography} from "antd";
import {FC} from "react";
import {useTranslation} from "react-i18next";

export interface ITagListProps extends Partial<ITagInfiniteListSourceProps> {
}

export const TagList: FC<ITagListProps> = props => {
	const {t} = useTranslation();
	const selectionContext = useOptionalSelectionContext();
	return <TagInfiniteListSource
		withFulltext
		{...props}
	>
		{tag => <ListItem
			key={`tag-${tag.id}`}
			extra={<SelectionBool selection={tag}/>}
		>
			<ListItemMeta
				title={<Typography.Text
					onClick={() => selectionContext?.item(tag)}
				>
					{t(`common.${tag.group}.${tag.tag}`)}
				</Typography.Text>}
			/>
		</ListItem>}
	</TagInfiniteListSource>;
};
