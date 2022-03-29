import {FC} from "react";
import {ICotton} from "@/puff-smith/service/cotton";
import {useCreateMutation} from "@/sdk/api/cotton/inventory/create";
import {ITransactionModalButtonProps, TransactionModalButton} from "@/puff-smith/site/shared/transaction";

export interface ICottonInventoryCreateButtonProps extends Partial<ITransactionModalButtonProps<typeof useCreateMutation>> {
	cotton: ICotton;
}

export const CottonInventoryCreateButton: FC<ICottonInventoryCreateButtonProps> = ({cotton, ...props}) => {
	return <TransactionModalButton<typeof useCreateMutation>
		translation={'market.cotton'}
		useCreateMutation={useCreateMutation}
		toMutate={() => ({
			cottonId: cotton.id,
		})}
		cost={cotton.cost}
		{...props}
	/>
}
