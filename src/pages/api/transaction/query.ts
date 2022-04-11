import {ITransaction, ITransactionQuery, TransactionService} from "@/puff-smith/service/transaction";
import {QueryEndpoint} from "@leight-core/server";

export default QueryEndpoint<"Transactions", ITransactionQuery, ITransaction>(TransactionService().handleQuery);
