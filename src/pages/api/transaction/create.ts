import {ofParams} from "@/puff-smith/service";
import {ITransaction, ITransactionCreate} from "@/puff-smith/service/transaction/interface";
import {TransactionRepository} from "@/puff-smith/service/transaction/TransactionRepository";
import {CreateEndpoint} from "@leight-core/server";

export default CreateEndpoint<"Create", ITransactionCreate, ITransaction>(async params => TransactionRepository(ofParams(params)).handleCreate(params));
