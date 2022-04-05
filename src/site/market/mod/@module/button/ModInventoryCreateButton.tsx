import {IMod} from "@/puff-smith/service/mod";
import {ITransactionModalButtonProps, TransactionModalButton} from "@/puff-smith/site/shared/transaction";
import {useCreateMutation} from "@/sdk/api/mod/inventory/create";
import {FC} from "react";

export interface IModInventoryCreateButtonProps extends Partial<ITransactionModalButtonProps<typeof useCreateMutation>> {
	mod: IMod;
}

export const ModInventoryCreateButton: FC<IModInventoryCreateButtonProps> = ({mod, ...props}) => {
	return <TransactionModalButton<typeof useCreateMutation>
		translation={"market.mod"}
		useCreateMutation={useCreateMutation}
		toMutate={() => ({
			modId: mod.id,
		})}
		cost={mod.cost}
		{...props}
	/>;
};
