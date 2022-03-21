import {EntityEndpoint} from "@leight-core/server";
import {ITransactionQuery, transactionSum} from "@/puff-smith/service/transaction";

export default EntityEndpoint<"Sum", ITransactionQuery, number>(async ({req: {body}}) => transactionSum(body));
