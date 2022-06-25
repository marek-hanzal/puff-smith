import {AromaIcon} from "@/puff-smith/component/icon/AromaIcon";
import {MixtureIcon} from "@/puff-smith/component/icon/MixtureIcon";
import {IAromaInventory} from "@/puff-smith/service/aroma/inventory/interface";
import {CommentOutlined} from "@ant-design/icons";
import {CreateMenuItem, IMenuProps, Menu} from "@leight-core/client";
import {FC} from "react";

export interface IAromaIndexMenuProps extends Partial<IMenuProps> {
	aromaInventory: IAromaInventory;
}

export const AromaIndexMenu: FC<IAromaIndexMenuProps> = ({aromaInventory, ...props}) => {
	const query = {aromaInventoryId: aromaInventory.id};
	return <Menu
		style={{border: "none"}}
		mode={"horizontal"}
		items={[
			CreateMenuItem({
				title: "inventory.aroma.aroma.menu",
				href: "/inventory/aroma/[aromaInventoryId]",
				icon: <AromaIcon/>,
				query,
			}),
			CreateMenuItem({
				title: "inventory.aroma.mixture.menu",
				href: "/inventory/aroma/[aromaInventoryId]/mixture",
				icon: <MixtureIcon/>,
				query,
			}),
			CreateMenuItem({
				title: "inventory.aroma.comment.menu",
				href: "/inventory/aroma/[aromaInventoryId]/comment",
				icon: <CommentOutlined/>,
				query,
			}),
		]}
		{...props}
	/>;
};
