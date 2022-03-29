import {FC} from "react";
import {IMod} from "@/puff-smith/service/mod";
import {useCreateMutation} from "@/sdk/api/mod/inventory/create";
import {ITransactionModalButtonProps, TransactionModalButton} from "@/puff-smith/site/shared/transaction";

export interface IModInventoryCreateButtonProps extends Partial<ITransactionModalButtonProps<typeof useCreateMutation>> {
	mod: IMod;
}

export const ModInventoryCreateButton: FC<IModInventoryCreateButtonProps> = ({mod, ...props}) => {
	return <TransactionModalButton<typeof useCreateMutation>
		translation={'market.mod'}
		useCreateMutation={useCreateMutation}
		toMutate={() => ({
			modId: mod.id,
		})}
		cost={mod.cost}
		{...props}
	/>
}
