import {ITransactionQuery} from "@/puff-smith/service/transaction/interface";
import {TransactionRepository} from "@/puff-smith/service/transaction/TransactionRepository";
import {EntityEndpoint} from "@leight-core/server";

export default EntityEndpoint<"Sum", ITransactionQuery, number>(async ({request}) => TransactionRepository().sum(request));
