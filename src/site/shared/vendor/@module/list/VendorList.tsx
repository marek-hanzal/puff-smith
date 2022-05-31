import {IVendorListSourceProps, VendorListSource} from "@/sdk/api/vendor/query";
import {ListItem, ListItemMeta} from "@leight-core/client";
import {FC} from "react";

export interface IVendorListProps extends Partial<IVendorListSourceProps> {
}

export const VendorList: FC<IVendorListProps> = props => {
	return <VendorListSource
		{...props}
	>
		{vendor => <ListItem>
			<ListItemMeta
				title={vendor.name}
			/>
		</ListItem>}
	</VendorListSource>;
};
