import {ICotton} from "@/puff-smith/service/cotton";
import {ITransactionModalButtonProps, TransactionModalButton} from "@/puff-smith/site/shared/transaction";
import {useCreateMutation} from "@/sdk/api/cotton/inventory/create";
import {FC} from "react";

export interface ICottonInventoryCreateButtonProps extends Partial<ITransactionModalButtonProps<typeof useCreateMutation>> {
	cotton: ICotton;
}

export const CottonInventoryCreateButton: FC<ICottonInventoryCreateButtonProps> = ({cotton, ...props}) => {
	return <TransactionModalButton<typeof useCreateMutation>
		translation={"market.cotton"}
		useCreateMutation={useCreateMutation}
		toMutate={() => ({
			cottonId: cotton.id,
		})}
		cost={cotton.cost}
		{...props}
	/>;
};
