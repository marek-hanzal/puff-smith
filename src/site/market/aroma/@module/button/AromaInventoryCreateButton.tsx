import {FC} from "react";
import {IAroma} from "@/puff-smith/service/aroma";
import {useCreateMutation} from "@/sdk/api/aroma/inventory/create";
import {ITransactionModalButtonProps, TransactionModalButton} from "@/puff-smith/site/shared/transaction";

export interface IAromaInventoryCreateButtonProps extends Partial<ITransactionModalButtonProps<typeof useCreateMutation>> {
	aroma: IAroma;
}

export const AromaInventoryCreateButton: FC<IAromaInventoryCreateButtonProps> = ({aroma, ...props}) => {
	return <TransactionModalButton<typeof useCreateMutation>
		translation={'market.aroma'}
		useCreateMutation={useCreateMutation}
		toMutate={() => ({
			aromaId: aroma.id,
		})}
		cost={aroma.cost}
		{...props}
	/>
}
