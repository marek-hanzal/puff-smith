import {IVoucher} from "@/puff-smith/service/voucher/interface";
import {ITransactionModalButtonProps, TransactionModalButton} from "@/puff-smith/site/shared/transaction/@module/button/TransactionModalButton";
import {useCreateMutation} from "@/sdk/api/inventory/voucher/create";
import {FC} from "react";

export interface IVoucherInventoryCreateButtonProps extends Partial<ITransactionModalButtonProps<typeof useCreateMutation>> {
	voucher: IVoucher;
}

export const VoucherInventoryCreateButton: FC<IVoucherInventoryCreateButtonProps> = ({voucher, ...props}) => {
	return <TransactionModalButton<typeof useCreateMutation>
		translation={"market.voucher"}
		useCreateMutation={useCreateMutation}
		toMutate={() => ({
			voucherId: voucher.id,
		})}
		isDisabled={(_, puffiesQuery) => puffiesQuery.isLoading || (puffiesQuery.isSuccess && voucher.maxFortune && puffiesQuery.data >= voucher.maxFortune) || false}
		cost={voucher.cost}
		{...props}
	/>;
};
