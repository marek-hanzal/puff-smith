import {ofParams} from "@/puff-smith/service";
import {ITransactionQuery} from "@/puff-smith/service/transaction/interface";
import {TransactionRepository} from "@/puff-smith/service/transaction/TransactionRepository";
import {EntityEndpoint} from "@leight-core/server";

export default EntityEndpoint<"Sum", ITransactionQuery, number>(async params => TransactionRepository(ofParams(params)).sum(params.request));
