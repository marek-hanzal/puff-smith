import {Price} from "@/puff-smith/component/Price";
import {IUser} from "@/puff-smith/service/user/interface";
import {TransactionCreateButton} from "@/puff-smith/site/root/transaction/@module/button/TransactionCreateButton";
import {useSumQuery} from "@/sdk/api/transaction/sum";
import {ButtonBar} from "@leight-core/client";
import {Divider} from "antd";
import {FC} from "react";

export interface ITransactionListHeaderProps {
	user?: IUser;
}

export const TransactionListHeader: FC<ITransactionListHeaderProps> = ({user}) => {
	const sumQuery = useSumQuery();
	return <ButtonBar split={<Divider type={"vertical"}/>}>
		<TransactionCreateButton user={user}/>
		<Price withIcon withColor price={sumQuery.data}/>
	</ButtonBar>;
};
