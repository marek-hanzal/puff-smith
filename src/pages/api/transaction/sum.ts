import {EntityEndpoint} from "@leight-core/server";
import {ITransactionQuery, TransactionService} from "@/puff-smith/service/transaction";

export default EntityEndpoint<"Sum", ITransactionQuery, number>(async ({request}) => TransactionService().sum(request));
