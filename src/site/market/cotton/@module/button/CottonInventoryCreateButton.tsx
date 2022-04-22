import {ICotton} from "@/puff-smith/service/cotton";
import {ITransactionModalButtonProps, TransactionModalButton} from "@/puff-smith/site/shared/transaction";
import {useCreateMutation} from "@/sdk/api/cotton/inventory/create";
import {useCottonsMarketQueryInvalidate} from "@/sdk/api/cotton/market/query";
import {FC, useState} from "react";

export interface ICottonInventoryCreateButtonProps extends Partial<ITransactionModalButtonProps<typeof useCreateMutation>> {
	cotton: ICotton;
}

export const CottonInventoryCreateButton: FC<ICottonInventoryCreateButtonProps> = ({cotton, disabled, ...props}) => {
	const [enabled, setEnabled] = useState<boolean>(disabled !== undefined ? !disabled : true);
	const cottonsMarketQueryInvalidate = useCottonsMarketQueryInvalidate();
	return <TransactionModalButton<typeof useCreateMutation>
		translation={"market.cotton"}
		useCreateMutation={useCreateMutation}
		toMutate={() => ({
			cottonId: cotton.id,
		})}
		cost={cotton.cost}
		onOk={() => setEnabled(false)}
		onSuccess={async () => {
			await cottonsMarketQueryInvalidate();
		}}
		disabled={!enabled}
		{...props}
	/>;
};
