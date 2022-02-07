import {IMixtureTableProps, MixtureTable} from "@/puff-smith/site/lab/mixture";
import {FC} from "react";
import {useTranslation} from "react-i18next";

export interface IRecentMixtureTableProps extends Partial<IMixtureTableProps> {
}

export const RecentMixtureTable: FC<IRecentMixtureTableProps> = props => {
	const {t} = useTranslation();
	return <MixtureTable
		listProps={{
			header: t('lab.mixture.latest.title'),
		}}
		header={() => t('lab.mixture.latest.title')}
		source={{
			defaultSize: 5,
			defaultOrderBy: {
				active: false,
				mixed: false,
			},
		}}
		{...props}
	/>
}
