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
			CreateMenuItem("inventory.aroma.aroma.menu", "/inventory/aroma/[aromaInventoryId]", <AromaIcon/>, query),
			CreateMenuItem("inventory.aroma.mixture.menu", "/inventory/aroma/[aromaInventoryId]/mixture", <MixtureIcon/>, query),
			CreateMenuItem("inventory.aroma.comment.menu", "/inventory/aroma/[aromaInventoryId]/comment", <CommentOutlined/>, query),
		]}
		{...props}
	/>;
};
