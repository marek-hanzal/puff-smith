import {FetchEndpoint} from "@leight-core/server";
import {TransactionService} from "@/puff-smith/service/transaction";

export default FetchEndpoint<"Puffies", number>(async ({toUserId}) => TransactionService().sumOf(await toUserId()));
