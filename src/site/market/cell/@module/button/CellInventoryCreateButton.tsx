import {ICell} from "@/puff-smith/service/cell";
import {ITransactionModalButtonProps, TransactionModalButton} from "@/puff-smith/site/shared/transaction";
import {useCreateMutation} from "@/sdk/api/cell/inventory/create";
import {FC} from "react";

export interface ICellInventoryCreateButtonProps extends Partial<ITransactionModalButtonProps<typeof useCreateMutation>> {
	cell: ICell;
}

export const CellInventoryCreateButton: FC<ICellInventoryCreateButtonProps> = ({cell, ...props}) => {
	return <TransactionModalButton<typeof useCreateMutation>
		translation={"market.cell"}
		useCreateMutation={useCreateMutation}
		toMutate={() => ({
			cellId: cell.id,
		})}
		cost={cell.cost}
		{...props}
	/>;
};
