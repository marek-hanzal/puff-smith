import {ServerBootstrap} from "@/puff-smith/service/bootstrap";
import {ITransactionQuery, TransactionService} from "@/puff-smith/service/transaction";
import {EntityEndpoint} from "@leight-core/server";

ServerBootstrap();

export default EntityEndpoint<"Sum", ITransactionQuery, number>(async ({request}) => TransactionService().sum(request));
