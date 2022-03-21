import {QueryEndpoint} from "@leight-core/server";
import {ITransaction, ITransactionQuery, transactionQuery} from "@/puff-smith/service/transaction";

export default QueryEndpoint<"Transactions", ITransactionQuery, ITransaction>(async ({req: {body}}) => transactionQuery(body));
