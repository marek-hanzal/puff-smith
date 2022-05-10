import {IAroma} from "@/puff-smith/service/aroma/interface";
import {ITransactionModalButtonProps, TransactionModalButton} from "@/puff-smith/site/shared/transaction/@module/button/TransactionModalButton";
import {useCreateMutation} from "@/sdk/api/aroma/inventory/create";
import {useAromaMarketQueryInvalidate} from "@/sdk/api/aroma/market/query";
import {FC, useState} from "react";

export interface IAromaInventoryCreateButtonProps extends Partial<ITransactionModalButtonProps<typeof useCreateMutation>> {
	aroma: IAroma;
}

export const AromaInventoryCreateButton: FC<IAromaInventoryCreateButtonProps> = ({aroma, disabled, ...props}) => {
	const [enabled, setEnabled] = useState<boolean>(disabled !== undefined ? !disabled : true);
	const aromasMarketQueryInvalidate = useAromaMarketQueryInvalidate();
	return <TransactionModalButton<typeof useCreateMutation>
		translation={"market.aroma"}
		useCreateMutation={useCreateMutation}
		toMutate={() => ({
			aromaId: aroma.id,
		})}
		cost={aroma.cost}
		onOk={() => setEnabled(false)}
		onSuccess={async () => {
			await aromasMarketQueryInvalidate();
		}}
		disabled={!enabled}
		{...props}
	/>;
};
