import {FC} from "react";
import {ButtonBar} from "@leight-core/client";
import {TransactionCreateButton} from "@/puff-smith/site/root/transaction";
import {IUser} from "@/puff-smith/service/user";
import {Divider} from "antd";
import {Price} from "@/puff-smith";
import {useSumQuery} from "@/sdk/api/transaction/sum";

export interface ITransactionListHeaderProps {
	user?: IUser;
}

export const TransactionListHeader: FC<ITransactionListHeaderProps> = ({user}) => {
	const sumQuery = useSumQuery();
	return <ButtonBar split={<Divider type={'vertical'}/>}>
		<TransactionCreateButton user={user}/>
		<Price withIcon withColor price={sumQuery.data}/>
	</ButtonBar>
}
