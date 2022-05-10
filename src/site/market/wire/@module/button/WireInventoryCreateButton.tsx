import {IWire} from "@/puff-smith/service/wire/interface";
import {ITransactionModalButtonProps, TransactionModalButton} from "@/puff-smith/site/shared/transaction/@module/button/TransactionModalButton";
import {useCreateMutation} from "@/sdk/api/wire/inventory/create";
import {useWireMarketQueryInvalidate} from "@/sdk/api/wire/market/query";
import {FC, useState} from "react";

export interface IWireInventoryCreateButtonProps extends Partial<ITransactionModalButtonProps<typeof useCreateMutation>> {
	wire: IWire;
}

export const WireInventoryCreateButton: FC<IWireInventoryCreateButtonProps> = ({wire, disabled, ...props}) => {
	const [enabled, setEnabled] = useState<boolean>(disabled !== undefined ? !disabled : true);
	const wiresMarketQueryInvalidate = useWireMarketQueryInvalidate();
	return <TransactionModalButton<typeof useCreateMutation>
		translation={"market.wire"}
		useCreateMutation={useCreateMutation}
		toMutate={() => ({
			wireId: wire.id,
		})}
		cost={wire.cost}
		onOk={() => setEnabled(false)}
		onSuccess={async () => {
			await wiresMarketQueryInvalidate();
		}}
		disabled={!enabled}
		{...props}
	/>;
};
