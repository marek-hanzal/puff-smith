import {IAtomizer} from "@/puff-smith/service/atomizer";
import {ITransactionModalButtonProps, TransactionModalButton} from "@/puff-smith/site/shared/transaction";
import {useCreateMutation} from "@/sdk/api/atomizer/inventory/create";
import {FC} from "react";

export interface IAtomizerInventoryCreateButtonProps extends Partial<ITransactionModalButtonProps<typeof useCreateMutation>> {
	atomizer: IAtomizer;
}

export const AtomizerInventoryCreateButton: FC<IAtomizerInventoryCreateButtonProps> = ({atomizer, ...props}) => {
	return <TransactionModalButton<typeof useCreateMutation>
		translation={"market.atomizer"}
		useCreateMutation={useCreateMutation}
		toMutate={() => ({
			atomizerId: atomizer.id,
		})}
		cost={atomizer.cost}
		{...props}
	/>;
};
