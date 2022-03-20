import {QueryEndpoint} from "@leight-core/server";
import {ITransaction, ITransactionFilter, ITransactionOrderBy, ITransactionQuery, transactionQuery} from "@/puff-smith/service/transaction";

export default QueryEndpoint<"Transactions", ITransactionQuery, ITransaction, ITransactionFilter, ITransactionOrderBy>(async ({req: {body}}) => transactionQuery(body));
