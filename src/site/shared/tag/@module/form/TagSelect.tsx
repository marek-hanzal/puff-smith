import {ITagQuery} from "@/puff-smith/service/tag/interface";
import {ITagSourceSelectProps, TagProviderControl, TagSourceSelect} from "@/sdk/api/tag/query";
import {IQueryFilter} from "@leight-core/api";
import {FC} from "react";
import {useTranslation} from "react-i18next";

export interface ITagSelectProps extends Partial<ITagSourceSelectProps> {
	translation?: string;
	applyFilter?: IQueryFilter<ITagQuery>;
}

export const TagSelect: FC<ITagSelectProps> = ({translation, applyFilter, ...props}) => {
	const {t} = useTranslation();
	return <TagProviderControl
		applyFilter={applyFilter}
		defaultOrderBy={{
			sort: "asc",
		}}
	>
		<TagSourceSelect
			toOption={tag => ({
				label: translation ? t(`${translation}.${tag.code}`) : tag.code,
				value: tag.id,
			})}
			{...props}
		/>
	</TagProviderControl>;
};
