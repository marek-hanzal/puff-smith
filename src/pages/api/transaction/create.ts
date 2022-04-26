import {ITransaction, ITransactionCreate} from "@/puff-smith/service/transaction/interface";
import {TransactionService} from "@/puff-smith/service/transaction/TransactionService";
import {CreateEndpoint} from "@leight-core/server";

export default CreateEndpoint<"Create", ITransactionCreate, ITransaction>(TransactionService().handleCreate);
