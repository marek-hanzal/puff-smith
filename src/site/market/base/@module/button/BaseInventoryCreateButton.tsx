import {IBase} from "@/puff-smith/service/base/interface";
import {ITransactionModalButtonProps, TransactionModalButton} from "@/puff-smith/site/shared/transaction/@module/button/TransactionModalButton";
import {useCreateMutation} from "@/sdk/api/inventory/base/create";
import {useBaseMarketQueryInvalidate} from "@/sdk/api/market/base/query";
import {useMixtureMarketQueryInvalidate} from "@/sdk/api/market/mixture/query";
import {FC, useState} from "react";

export interface IBaseInventoryCreateButtonProps extends Partial<ITransactionModalButtonProps<typeof useCreateMutation>> {
	base: IBase;
}

export const BaseInventoryCreateButton: FC<IBaseInventoryCreateButtonProps> = ({base, disabled, ...props}) => {
	const [enabled, setEnabled] = useState<boolean>(disabled !== undefined ? !disabled : true);
	const baseMarketQueryInvalidate = useBaseMarketQueryInvalidate();
	const mixtureMarketQueryInvalidate = useMixtureMarketQueryInvalidate();
	return <TransactionModalButton<typeof useCreateMutation>
		translation={"market.base"}
		useCreateMutation={useCreateMutation}
		toMutate={() => ({
			baseId: base.id,
		})}
		cost={base.cost}
		onOk={() => setEnabled(false)}
		onSuccess={async () => {
			await baseMarketQueryInvalidate();
			await mixtureMarketQueryInvalidate();
		}}
		disabled={!enabled}
		{...props}
	/>;
};
