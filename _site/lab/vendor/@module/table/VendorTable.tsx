import {IVendorsSourceTableProps, useVendorsOptionalFilterContext, VendorsSourceTable} from "@/sdk/puff-smith/api/lab/vendor/endpoint";
import {FC} from "react";
import {ButtonBar} from "@leight-core/common";
import {useTranslation} from "react-i18next";
import {VendorListItem} from "./VendorListItem";
import {VendorLinkButton} from "../component/button/VendorLinkButton";
import {VendorQuickMenu} from "../component/VendorQuickMenu";
import {VendorPreviewButton} from "../component/button/VendorPreviewButton";

export interface IVendorTableProps extends Partial<IVendorsSourceTableProps> {
}

export const VendorTable: FC<IVendorTableProps> = props => {
	const {t} = useTranslation();
	const filterContext = useVendorsOptionalFilterContext();
	return <VendorsSourceTable
		filter={filterContext?.filter}
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
