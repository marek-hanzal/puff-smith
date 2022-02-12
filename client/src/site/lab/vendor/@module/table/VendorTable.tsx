import {IVendorsSourceTableProps, VendorsSourceTable} from "@/sdk/puff-smith/api/lab/vendor/endpoint";
import {FC} from "react";
import {ButtonBar} from "@leight-core/leight";
import {useTranslation} from "react-i18next";
import {VendorListItem} from "@/puff-smith/site/lab/vendor/@module/table/VendorListItem";
import {VendorLinkButton} from "@/puff-smith/site/lab/vendor/@module/component/button/VendorLinkButton";
import {VendorQuickMenu} from "@/puff-smith/site/lab/vendor/@module/component/VendorQuickMenu";
import {VendorPreviewButton} from "@/puff-smith/site/lab/vendor/@module/component/button/VendorPreviewButton";

export interface IVendorTableProps extends Partial<IVendorsSourceTableProps> {
}

export const VendorTable: FC<IVendorTableProps> = props => {
	const {t} = useTranslation();
	return <VendorsSourceTable
		footer={sourceContext => t('lab.vendor.table.footer.label', {data: sourceContext.data()})}
		listItemRender={vendor => <VendorListItem vendor={vendor}/>}
		{...props}
	>
		{({column}) => [
			column({
				key: "id",
				render: (_, vendor) => <ButtonBar>
					<VendorLinkButton title={null} vendor={vendor}/>
					<VendorQuickMenu vendor={vendor}/>
				</ButtonBar>,
				width: 1,
			}),
			column({
				key: "name",
				title: 'lab.vendor.table.name',
				render: (_, vendor) => <VendorPreviewButton title={vendor.name} vendor={vendor}/>,
				sorter: true,
			}),
		]}
	</VendorsSourceTable>
}
