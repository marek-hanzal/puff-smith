import {FC} from "react";
import {DrawerButton, IDrawerButtonProps} from "@leight-core/client";
import {PurchaseIcon} from "@/puff-smith";
import {TransactionCreateForm} from "@/puff-smith/site/root/transaction";
import {IUser} from "@/puff-smith/service/user";

export interface ITransactionCreateButtonProps extends Partial<IDrawerButtonProps> {
	user?: IUser;
}

export const TransactionCreateButton: FC<ITransactionCreateButtonProps> = ({user, ...props}) => {
	return <DrawerButton
		size={'large'}
		type={'primary'}
		ghost
		icon={<PurchaseIcon/>}
		title={'root.transaction.create.title'}
		{...props}
	>
		<TransactionCreateForm
			toForm={() => ({
				userId: user?.id,
			})}
		/>
	</DrawerButton>;
}