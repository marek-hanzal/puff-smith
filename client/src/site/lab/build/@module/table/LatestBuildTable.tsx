import {BuildTable, IBuildTableProps} from "@/puff-smith/site/lab/build";
import {FC} from "react";
import {useTranslation} from "react-i18next";

export interface ILatestBuildTableProps extends Partial<IBuildTableProps> {
}

export const LatestBuildTable: FC<ILatestBuildTableProps> = props => {
	const {t} = useTranslation();
	return <BuildTable
		listProps={{header: t('lab.build.latest.title')}}
		source={{
			defaultSize: 5,
		}}
		{...props}
	/>
}
