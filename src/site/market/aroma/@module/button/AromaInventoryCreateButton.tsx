import {IAroma} from "@/puff-smith/service/aroma";
import {ITransactionModalButtonProps, TransactionModalButton} from "@/puff-smith/site/shared/transaction";
import {useCreateMutation} from "@/sdk/api/aroma/inventory/create";
import {useAromasQueryInvalidate} from "@/sdk/api/aroma/query";
import {FC} from "react";

export interface IAromaInventoryCreateButtonProps extends Partial<ITransactionModalButtonProps<typeof useCreateMutation>> {
	aroma: IAroma;
}

export const AromaInventoryCreateButton: FC<IAromaInventoryCreateButtonProps> = ({aroma, ...props}) => {
	const aromasQueryInvalidate = useAromasQueryInvalidate();
	return <TransactionModalButton<typeof useCreateMutation>
		translation={"market.aroma"}
		useCreateMutation={useCreateMutation}
		toMutate={() => ({
			aromaId: aroma.id,
		})}
		onSuccess={() => aromasQueryInvalidate()}
		cost={aroma.cost}
		{...props}
	/>;
};
