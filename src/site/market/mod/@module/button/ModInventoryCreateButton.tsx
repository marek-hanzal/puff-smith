import {IMod} from "@/puff-smith/service/mod";
import {ITransactionModalButtonProps, TransactionModalButton} from "@/puff-smith/site/shared/transaction";
import {useCreateMutation} from "@/sdk/api/mod/inventory/create";
import {useModsMarketQueryInvalidate} from "@/sdk/api/mod/market/query";
import {FC, useState} from "react";

export interface IModInventoryCreateButtonProps extends Partial<ITransactionModalButtonProps<typeof useCreateMutation>> {
	mod: IMod;
}

export const ModInventoryCreateButton: FC<IModInventoryCreateButtonProps> = ({mod, disabled, ...props}) => {
	const [enabled, setEnabled] = useState<boolean>(disabled !== undefined ? !disabled : true);
	const modsMarketQueryInvalidate = useModsMarketQueryInvalidate();
	return <TransactionModalButton<typeof useCreateMutation>
		translation={"market.mod"}
		useCreateMutation={useCreateMutation}
		toMutate={() => ({
			modId: mod.id,
		})}
		cost={mod.cost}
		onOk={() => setEnabled(false)}
		onSuccess={async () => {
			await modsMarketQueryInvalidate();
		}}
		disabled={!enabled}
		{...props}
	/>;
};
