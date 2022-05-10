import {ICell} from "@/puff-smith/service/cell/interface";
import {ITransactionModalButtonProps, TransactionModalButton} from "@/puff-smith/site/shared/transaction/@module/button/TransactionModalButton";
import {useCreateMutation} from "@/sdk/api/cell/inventory/create";
import {useCellMarketQueryInvalidate} from "@/sdk/api/cell/market/query";
import {FC} from "react";

export interface ICellInventoryCreateButtonProps extends Partial<ITransactionModalButtonProps<typeof useCreateMutation>> {
	cell: ICell;
}

export const CellInventoryCreateButton: FC<ICellInventoryCreateButtonProps> = ({cell, ...props}) => {
	const cellsMarketQueryInvalidate = useCellMarketQueryInvalidate();
	return <TransactionModalButton<typeof useCreateMutation>
		translation={"market.cell"}
		useCreateMutation={useCreateMutation}
		toMutate={() => ({
			cellId: cell.id,
		})}
		cost={cell.cost}
		onSuccess={async () => {
			await cellsMarketQueryInvalidate();
		}}
		{...props}
	/>;
};
