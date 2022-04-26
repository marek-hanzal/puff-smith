import {IBooster} from "@/puff-smith/service/booster/interface";
import {ITransactionModalButtonProps, TransactionModalButton} from "@/puff-smith/site/shared/transaction/@module/button/TransactionModalButton";
import {useCreateMutation} from "@/sdk/api/booster/inventory/create";
import {useBoostersMarketQueryInvalidate} from "@/sdk/api/booster/market/query";
import {FC, useState} from "react";

export interface IBoosterInventoryCreateButtonProps extends Partial<ITransactionModalButtonProps<typeof useCreateMutation>> {
	booster: IBooster;
}

export const BoosterInventoryCreateButton: FC<IBoosterInventoryCreateButtonProps> = ({booster, disabled, ...props}) => {
	const [enabled, setEnabled] = useState<boolean>(disabled !== undefined ? !disabled : true);
	const boostersMarketQueryInvalidate = useBoostersMarketQueryInvalidate();
	return <TransactionModalButton<typeof useCreateMutation>
		translation={"market.booster"}
		useCreateMutation={useCreateMutation}
		toMutate={() => ({
			boosterId: booster.id,
		})}
		cost={booster.cost}
		onOk={() => setEnabled(false)}
		onSuccess={async () => {
			await boostersMarketQueryInvalidate();
		}}
		disabled={!enabled}
		{...props}
	/>;
};
