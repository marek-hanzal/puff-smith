import {ICellInventory} from "@/puff-smith/service/cell/inventory/interface";
import {CellInfoCreateForm} from "@/puff-smith/site/inventory/cell/info/@module/form/CellInfoCreateForm";
import {ToolOutlined} from "@ant-design/icons";
import {DrawerButton, IDrawerButtonProps} from "@leight-core/client";
import {FC} from "react";

export interface ICellInfoCreateButtonProps extends Partial<IDrawerButtonProps> {
	cellInventory: ICellInventory;
}

export const CellInfoCreateButton: FC<ICellInfoCreateButtonProps> = ({cellInventory, ...props}) => {
	return <DrawerButton
		size={"large"}
		type={"primary"}
		icon={<ToolOutlined/>}
		label={"inventory.cell.info.create.button"}
		title={"inventory.cell.info.create.title"}
		{...props}
	>
		<CellInfoCreateForm cellInventory={cellInventory}/>
	</DrawerButton>;
};
