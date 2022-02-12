import {IVendorsSourceTableProps, VendorsSourceTable} from "@/sdk/puff-smith/api/lab/vendor/endpoint";
import {FC} from "react";
import {VendorLinkButton, VendorListItem, VendorPreviewButton, VendorQuickMenu} from "@/puff-smith/site/lab/vendor";
import {VendorFilterDto} from "@/sdk/puff-smith/vendor/dto";
import {ButtonBar, useOptionalFilterContext} from "@leight-core/leight";
import {useTranslation} from "react-i18next";

export interface IVendorTableProps extends Partial<IVendorsSourceTableProps> {
}

export const VendorTable: FC<IVendorTableProps> = props => {
	const filterContext = useOptionalFilterContext<VendorFilterDto>();
	const {t} = useTranslation();
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
				width: 0,
			}),
			column({
				key: "name",
				title: 'lab.vendor.table.name',
				render: (_, vendor) => <VendorPreviewButton title={vendor.name} vendor={vendor}/>,
				sorter: true,
				width: 240,
			}),
			column({
				key: "vendor",
				title: 'lab.vendor.table.vendor',
				render: (_, vendor) => vendor.name,
				sorter: true,
				width: 260,
			}),
		]}
	</VendorsSourceTable>
}
