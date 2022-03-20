import {ITransactionsListSourceProps, TransactionsListSource} from "@/sdk/api/transaction/query";
import {FC} from "react";
import {ListItem, ListItemMeta, toHumanNumber, toLocalDateTime} from "@leight-core/client";
import {TransactionListHeader} from "@/puff-smith/site/root/transaction/@module/list/TransactionListHeader";
import {IUser} from "@/puff-smith/service/user";

export interface ITransactionListProps extends Partial<ITransactionsListSourceProps> {
	user?: IUser;
}

export const TransactionList: FC<ITransactionListProps> = ({user, ...props}) => {
	return <TransactionsListSource
		header={() => <TransactionListHeader user={user}/>}
		{...props}
	>
		{transaction => <ListItem key={transaction.id}>
			<ListItemMeta
				title={toLocalDateTime(transaction.created)}
				description={toHumanNumber(transaction.amount, 3)}
			/>
		</ListItem>}
	</TransactionsListSource>
}
