import {ServiceCreate} from "@/puff-smith/service";
import {TransactionService} from "@/puff-smith/service/transaction/TransactionService";
import {FetchEndpoint} from "@leight-core/server";

export default FetchEndpoint<"Puffies", number>(async ({toUserId}) => TransactionService(ServiceCreate(toUserId())).sumOf());
