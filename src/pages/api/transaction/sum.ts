import {ITransactionQuery, TransactionService} from "@/puff-smith/service/transaction";
import {EntityEndpoint} from "@leight-core/server";

export default EntityEndpoint<"Sum", ITransactionQuery, number>(async ({request}) => TransactionService().sum(request));
