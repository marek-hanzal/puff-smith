import {FC} from "react";
import {ListItemProps} from "antd/lib/list";
import {VendorDto} from "@/sdk/puff-smith/vendor/dto";
import {List} from "antd";
import {VendorQuickMenu} from "../component/VendorQuickMenu";
import {VendorPreviewButton} from "../component/button/VendorPreviewButton";

export interface IVendorListItemProps extends Partial<ListItemProps> {
	vendor: VendorDto;
}

export const VendorListItem: FC<IVendorListItemProps> = ({vendor, ...props}) => {
	return <List.Item
		actions={[<VendorQuickMenu key={'quick-menu'} vendor={vendor}/>]}
		{...props}
	>
		<List.Item.Meta
			title={<VendorPreviewButton
				icon={null}
				style={{padding: 0}}
				title={vendor.name}
				vendor={vendor}/>
			}
		/>
	</List.Item>;
}
