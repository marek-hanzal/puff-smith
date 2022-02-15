import {ITagsSourceSelectProps, TagsSourceSelect} from "@/sdk/edde/api/shared/tag/endpoint";
import {FC} from "react";
import {useTranslation} from "react-i18next";

export interface ITagSelectProps extends Partial<ITagsSourceSelectProps> {
	groups?: string[];
}

export const TagSelect: FC<ITagSelectProps> = ({groups, ...props}) => {
	const {t} = useTranslation();
	return <TagsSourceSelect
		source={{
			filter: {groups},
		}}
		toOption={tag => ({value: tag.id, label: t('tag.' + tag.code, tag.label)})}
		{...props}
	/>
}
