import {IAroma} from "@/puff-smith/service/aroma";
import {ITransactionModalButtonProps, TransactionModalButton} from "@/puff-smith/site/shared/transaction";
import {useCreateMutation} from "@/sdk/api/aroma/inventory/create";
import {useAromasMarketQueryInvalidate} from "@/sdk/api/aroma/market/query";
import {FC, useState} from "react";

export interface IAromaInventoryCreateButtonProps extends Partial<ITransactionModalButtonProps<typeof useCreateMutation>> {
	aroma: IAroma;
}

export const AromaInventoryCreateButton: FC<IAromaInventoryCreateButtonProps> = ({aroma, disabled, ...props}) => {
	const [enabled, setEnabled] = useState<boolean>(disabled !== undefined ? !disabled : true);
	const aromasMarketQueryInvalidate = useAromasMarketQueryInvalidate();
	return <TransactionModalButton<typeof useCreateMutation>
		translation={"market.aroma"}
		useCreateMutation={useCreateMutation}
		toMutate={() => ({
			aromaId: aroma.id,
		})}
		onOk={() => setEnabled(false)}
		onSuccess={async () => {
			await aromasMarketQueryInvalidate();
		}}
		cost={aroma.cost}
		disabled={!enabled}
		{...props}
	/>;
};
