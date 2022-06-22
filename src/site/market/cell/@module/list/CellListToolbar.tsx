import {DeleteConfirmButton} from "@/puff-smith/component/button/DeleteConfirmButton";
import {useDeleteMutation} from "@/sdk/api/cell/delete";
import {useCellMarketQueryInvalidate} from "@/sdk/api/market/cell/query";
import {ButtonBar, IButtonBarProps} from "@leight-core/client";
import {FC} from "react";

interface ICellListToolbarProps extends Partial<IButtonBarProps> {
}

export const CellListToolbar: FC<ICellListToolbarProps> = props => {
	const cellMarketQueryInvalidate = useCellMarketQueryInvalidate();
	return <ButtonBar size={4} {...props}>
		<DeleteConfirmButton
			translation={"market.cell"}
			mutator={useDeleteMutation()}
			invalidator={async () => cellMarketQueryInvalidate()}
		/>
	</ButtonBar>;
};
