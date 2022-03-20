import {FC} from "react";
import {ButtonBar} from "@leight-core/client";
import {TransactionCreateButton} from "@/puff-smith/site/root/transaction";
import {IUser} from "@/puff-smith/service/user";

export interface ITransactionListHeaderProps {
	user?: IUser;
}

export const TransactionListHeader: FC<ITransactionListHeaderProps> = ({user}) => {
	return <ButtonBar>
		<TransactionCreateButton user={user}/>
	</ButtonBar>
}
