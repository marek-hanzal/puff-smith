import {CreateEndpoint} from "@leight-core/server";
import {ITransaction, ITransactionCreate, TransactionService} from "@/puff-smith/service/transaction";

export default CreateEndpoint<"Create", ITransactionCreate, ITransaction>(TransactionService().handleCreate);
