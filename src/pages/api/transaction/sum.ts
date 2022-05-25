import {ITransactionQuery} from "@/puff-smith/service/transaction/interface";
import {TransactionSource} from "@/puff-smith/service/transaction/TransactionSource";
import {EntityEndpoint} from "@leight-core/server";

export default EntityEndpoint<"Sum", ITransactionQuery, number>(async ({request, user}) => TransactionSource().withUser(user).sum(request));
