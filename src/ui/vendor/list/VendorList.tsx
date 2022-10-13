import {SelectionBool} from "@/puff-smith/component/inline/SelectionBool";
import {
	IVendorInfiniteListSourceProps,
	VendorInfiniteListSource
}                      from "@/sdk/api/vendor/query";
import {
	ListItem,
	ListItemMeta,
	useOptionalSelectionContext
}                      from "@leight-core/viv";
import {Typography}    from "antd";
import {FC}            from "react";

export interface IVendorListProps extends Partial<IVendorInfiniteListSourceProps> {
}

export const VendorList: FC<IVendorListProps> = props => {
	const selectionContext = useOptionalSelectionContext();
	return <VendorInfiniteListSource
		withFulltext
		{...props}
	>
		{vendor => <ListItem
			key={`vendor-${vendor.id}`}
			extra={<SelectionBool selection={vendor}/>}
		>
			<ListItemMeta
				title={<Typography.Text onClick={() => selectionContext?.item(vendor)}>
					{vendor.name}
				</Typography.Text>}
			/>
		</ListItem>}
	</VendorInfiniteListSource>;
};
