import {QueryEndpoint} from "@leight-core/server";
import {ITransaction, ITransactionQuery, TransactionService} from "@/puff-smith/service/transaction";

export default QueryEndpoint<"Transactions", ITransactionQuery, ITransaction>(TransactionService().handleQuery);
