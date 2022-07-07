import {SelectionBool} from "@/puff-smith/component/inline/SelectionBool";
import {IVendorListSourceProps, VendorInfiniteListSource, VendorListSource} from "@/sdk/api/vendor/query";
import {BrowserContent, InfiniteListItem, ListItem, ListItemMeta, MobileContent} from "@leight-core/client";
import {Divider, Space} from "antd";
import {FC} from "react";

export interface IVendorListProps extends Partial<IVendorListSourceProps> {
}

export const VendorList: FC<IVendorListProps> = props => {
	return <>
		<BrowserContent>
			<VendorListSource
				{...props}
			>
				{vendor => <ListItem
					key={vendor.id}
				>
					<ListItemMeta
						title={<Space split={<Divider type={"vertical"}/>}>
							<SelectionBool selection={vendor}/>
							{vendor.name}
						</Space>}
					/>
				</ListItem>}
			</VendorListSource>
		</BrowserContent>
		<MobileContent>
			<VendorInfiniteListSource
				withFulltext
			>
				{vendor => <InfiniteListItem
					key={vendor.id}
					onClick={navigate => navigate("/market/vendor/[vendorId]", {vendorId: vendor.id})}
				>
					{vendor.name}
				</InfiniteListItem>}
			</VendorInfiniteListSource>
		</MobileContent>
	</>;
};
