import {FC} from "react";
import {ICell} from "@/puff-smith/service/cell";
import {useCreateMutation} from "@/sdk/api/cell/inventory/create";
import {ITransactionModalButtonProps, TransactionModalButton} from "@/puff-smith/site/shared/transaction";

export interface ICellInventoryCreateButtonProps extends Partial<ITransactionModalButtonProps<typeof useCreateMutation>> {
	cell: ICell;
}

export const CellInventoryCreateButton: FC<ICellInventoryCreateButtonProps> = ({cell, ...props}) => {
	return <TransactionModalButton<typeof useCreateMutation>
		translation={'market.cell'}
		useCreateMutation={useCreateMutation}
		toMutate={() => ({
			cellId: cell.id,
		})}
		cost={cell.cost}
		{...props}
	/>
}
