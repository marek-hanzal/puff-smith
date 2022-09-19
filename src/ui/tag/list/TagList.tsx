import {SelectionBool} from "@/puff-smith/component/inline/SelectionBool";
import {ITagInfiniteListSourceProps, TagInfiniteListSource} from "@/sdk/api/tag/query";
import {ListItem, ListItemMeta, useOptionalSelectionContext} from "@leight-core/client";
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
			onClick={() => selectionContext?.item(tag)}
		>
			<ListItemMeta
				title={t(`common.${tag.group}.${tag.tag}`)}
			/>
		</ListItem>}
	</TagInfiniteListSource>;
};
