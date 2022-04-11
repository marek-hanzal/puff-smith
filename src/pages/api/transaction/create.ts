import {ITransaction, ITransactionCreate, TransactionService} from "@/puff-smith/service/transaction";
import {CreateEndpoint} from "@leight-core/server";

export default CreateEndpoint<"Create", ITransactionCreate, ITransaction>(TransactionService().handleCreate);
