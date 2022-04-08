import {ServerBootstrap} from "@/puff-smith/service/bootstrap";
import {ITransaction, ITransactionCreate, TransactionService} from "@/puff-smith/service/transaction";
import {CreateEndpoint} from "@leight-core/server";

ServerBootstrap();

export default CreateEndpoint<"Create", ITransactionCreate, ITransaction>(TransactionService().handleCreate);
