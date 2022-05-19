import {ofParams} from "@/puff-smith/service";
import {ITransaction, ITransactionQuery} from "@/puff-smith/service/transaction/interface";
import {TransactionRepository} from "@/puff-smith/service/transaction/TransactionRepository";
import {QueryEndpoint} from "@leight-core/server";

export default QueryEndpoint<"Transaction", ITransactionQuery, ITransaction>(async params => TransactionRepository(ofParams(params)).handleQuery(params));
