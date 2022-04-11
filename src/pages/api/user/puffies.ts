import {TransactionService} from "@/puff-smith/service/transaction";
import {FetchEndpoint} from "@leight-core/server";

export default FetchEndpoint<"Puffies", number>(async ({toUserId}) => TransactionService().sumOf(toUserId()));
