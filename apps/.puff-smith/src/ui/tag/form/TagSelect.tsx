import {
    ITagSourceSelectProps,
    TagSourceSelect
}                       from "@/sdk/api/tag/query";
import {FC}             from "react";
import {useTranslation} from "react-i18next";

export interface ITagSelectProps extends Partial<ITagSourceSelectProps> {
	translation?: string;
}

export const TagSelect: FC<ITagSelectProps> = ({translation, ...props}) => {
	const {t} = useTranslation();
	return <TagSourceSelect
		showSearch
		maxTagCount={2}
		maxTagTextLength={9}
		toOption={tag => ({
			label: t(translation ? `${translation}.${tag.group}.${tag.tag}` : `${tag.group}.${tag.tag}`),
			value: tag.id,
		})}
		{...props}
	/>;
};
