import {ServerBootstrap} from "@/puff-smith/service/bootstrap";
import {TransactionService} from "@/puff-smith/service/transaction";
import {FetchEndpoint} from "@leight-core/server";

ServerBootstrap();

export default FetchEndpoint<"Puffies", number>(async ({toUserId}) => TransactionService().sumOf(toUserId()));
