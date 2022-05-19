import {ITransaction, ITransactionCreate} from "@/puff-smith/service/transaction/interface";
import {TransactionRepository} from "@/puff-smith/service/transaction/TransactionRepository";
import {CreateEndpoint} from "@leight-core/server";

export default CreateEndpoint<"Create", ITransactionCreate, ITransaction>(TransactionRepository().handleCreate);
