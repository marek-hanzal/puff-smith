import {Price} from "@/puff-smith/component/Price";
import {IUser} from "@/puff-smith/service/user/interface";
import {TransactionListHeader} from "@/puff-smith/site/root/transaction/@module/list/TransactionListHeader";
import {ITransactionListSourceProps, TransactionListSource} from "@/sdk/api/transaction/query";
import {ListItem, ListItemMeta, toLocalDateTime} from "@leight-core/client";
import {Divider, Space} from "antd";
import {FC} from "react";

export interface ITransactionListProps extends Partial<ITransactionListSourceProps> {
	user?: IUser;
}

export const TransactionList: FC<ITransactionListProps> = ({user, ...props}) => {
	return <TransactionListSource
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
	</TransactionListSource>;
};
