import {DeleteConfirmButton} from "@/puff-smith/component/button/DeleteConfirmButton";
import {useDeleteMutation} from "@/sdk/api/inventory/cell/delete";
import {useCellInventoryQueryInvalidate} from "@/sdk/api/inventory/cell/query";
import {ButtonBar, IButtonBarProps} from "@leight-core/client";
import {FC} from "react";

interface ICellListToolbarProps extends Partial<IButtonBarProps> {
}

export const CellListToolbar: FC<ICellListToolbarProps> = props => {
	const cellInventoryQueryInvalidate = useCellInventoryQueryInvalidate();
	return <ButtonBar size={4} {...props}>
		<DeleteConfirmButton
			translation={"lab.cell.inventory"}
			mutator={useDeleteMutation()}
			invalidator={async () => cellInventoryQueryInvalidate()}
		/>
	</ButtonBar>;
};
