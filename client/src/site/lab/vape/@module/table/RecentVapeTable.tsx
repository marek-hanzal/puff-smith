import {IVapeTableProps, VapeTable} from "@/puff-smith/site/lab/vape";
import {FC} from "react";
import {useTranslation} from "react-i18next";

export interface IRecentVapeTableProps extends Partial<IVapeTableProps> {
}

export const RecentVapeTable: FC<IRecentVapeTableProps> = props => {
	const {t} = useTranslation();
	return <VapeTable
		listProps={{
			itemLayout: 'vertical',
			header: t('lab.vape.latest.title'),
		}}
		source={{
			defaultSize: 5,
		}}
		{...props}
	/>
}
