import {CellIcon} from "@/puff-smith/component/icon/CellIcon";
import {ICellInventory} from "@/puff-smith/service/cell/inventory/interface";
import {CommentOutlined, ToolOutlined} from "@ant-design/icons";
import {CreateMenuItem, IMenuProps, Menu} from "@leight-core/client";
import {FC} from "react";

export interface ICellIndexMenuProps extends Partial<IMenuProps> {
	cellInventory: ICellInventory;
}

export const CellIndexMenu: FC<ICellIndexMenuProps> = ({cellInventory, ...props}) => {
	const query = {cellInventoryId: cellInventory.id};
	return <Menu
		style={{border: "none"}}
		mode={"horizontal"}
		items={[
			CreateMenuItem({
				title: "inventory.cell.cell.menu",
				href: "/inventory/cell/[cellInventoryId]",
				icon: <CellIcon/>,
				query,
			}),
			CreateMenuItem({
				title: "inventory.cell.info.menu",
				href: "/inventory/cell/[cellInventoryId]/info",
				icon: <ToolOutlined/>,
				query,
			}),
			CreateMenuItem({
				title: "inventory.cell.comment.menu",
				href: "/inventory/cell/[cellInventoryId]/comment",
				icon: <CommentOutlined/>,
				query,
			}),
		]}
		{...props}
	/>;
};
