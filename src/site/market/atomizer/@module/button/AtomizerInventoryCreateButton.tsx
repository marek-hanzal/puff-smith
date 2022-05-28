import {IAtomizer} from "@/puff-smith/service/atomizer/interface";
import {ITransactionModalButtonProps, TransactionModalButton} from "@/puff-smith/site/shared/transaction/@module/button/TransactionModalButton";
import {useCreateMutation} from "@/sdk/api/inventory/atomizer/create";
import {useAtomizerMarketQueryInvalidate} from "@/sdk/api/market/atomizer/query";
import {FC, useState} from "react";

export interface IAtomizerInventoryCreateButtonProps extends Partial<ITransactionModalButtonProps<typeof useCreateMutation>> {
	atomizer: IAtomizer;
}

export const AtomizerInventoryCreateButton: FC<IAtomizerInventoryCreateButtonProps> = ({atomizer, disabled, ...props}) => {
	const [enabled, setEnabled] = useState<boolean>(disabled !== undefined ? !disabled : true);
	const atomizersMarketQueryInvalidate = useAtomizerMarketQueryInvalidate();
	return <TransactionModalButton<typeof useCreateMutation>
		translation={"market.atomizer"}
		useCreateMutation={useCreateMutation}
		toMutate={() => ({
			atomizerId: atomizer.id,
		})}
		cost={atomizer.cost}
		onOk={() => setEnabled(false)}
		onSuccess={async () => {
			await atomizersMarketQueryInvalidate();
		}}
		disabled={!enabled}
		{...props}
	/>;
};
