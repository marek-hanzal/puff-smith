import {SelectionBool} from "@/puff-smith/component/inline/SelectionBool";
import {IVendorListSourceProps, VendorListSource} from "@/sdk/api/vendor/query";
import {ListItem, ListItemMeta} from "@leight-core/client";
import {Divider, Space} from "antd";
import {FC} from "react";

export interface IVendorListProps extends Partial<IVendorListSourceProps> {
}

export const VendorList: FC<IVendorListProps> = props => {
	return <VendorListSource
		{...props}
	>
		{vendor => <ListItem>
			<ListItemMeta
				title={<Space split={<Divider type={"vertical"}/>}>
					<SelectionBool selection={vendor}/>
					{vendor.name}
				</Space>}
			/>
		</ListItem>}
	</VendorListSource>;
};
