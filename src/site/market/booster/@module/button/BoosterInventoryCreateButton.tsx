import {IBooster} from "@/puff-smith/service/booster";
import {ITransactionModalButtonProps, TransactionModalButton} from "@/puff-smith/site/shared/transaction";
import {useCreateMutation} from "@/sdk/api/booster/inventory/create";
import {FC} from "react";

export interface IBoosterInventoryCreateButtonProps extends Partial<ITransactionModalButtonProps<typeof useCreateMutation>> {
	booster: IBooster;
}

export const BoosterInventoryCreateButton: FC<IBoosterInventoryCreateButtonProps> = ({booster, ...props}) => {
	return <TransactionModalButton<typeof useCreateMutation>
		translation={"market.booster"}
		useCreateMutation={useCreateMutation}
		toMutate={() => ({
			boosterId: booster.id,
		})}
		cost={booster.cost}
		{...props}
	/>;
};
