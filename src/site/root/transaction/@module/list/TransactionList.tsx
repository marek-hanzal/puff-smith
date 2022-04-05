import {Price} from "@/puff-smith";
import {IUser} from "@/puff-smith/service/user";
import {TransactionListHeader} from "@/puff-smith/site/root/transaction";
import {ITransactionsListSourceProps, TransactionsListSource} from "@/sdk/api/transaction/query";
import {ListItem, ListItemMeta, toLocalDateTime} from "@leight-core/client";
import {Divider, Space} from "antd";
import {FC} from "react";

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
				title={<Space split={<Divider type={"vertical"}/>}>
					<Price withIcon withColor price={transaction.amount}/>
					{transaction.note}
				</Space>}
				description={toLocalDateTime(transaction.created)}
			/>
		</ListItem>}
	</TransactionsListSource>;
};
