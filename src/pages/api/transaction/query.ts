import {ServerBootstrap} from "@/puff-smith/service/bootstrap";
import {ITransaction, ITransactionQuery, TransactionService} from "@/puff-smith/service/transaction";
import {QueryEndpoint} from "@leight-core/server";

ServerBootstrap();

export default QueryEndpoint<"Transactions", ITransactionQuery, ITransaction>(TransactionService().handleQuery);
