import {FC} from "react";
import {useTranslation} from "react-i18next";

interface ITagsSourceSelectProps {
	source: any;
	toOption: (item: any) => any
	allowClear?: boolean;
	mode: string;
}

const TagsSourceSelect: FC<ITagsSourceSelectProps> = props => {
	return null as any;
}

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
