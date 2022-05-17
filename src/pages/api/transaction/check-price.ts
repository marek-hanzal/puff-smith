import {defaults} from "@/puff-smith/service";
import {ICheckRequest, ICheckResponse} from "@/puff-smith/service/transaction/interface";
import {TransactionService} from "@/puff-smith/service/transaction/TransactionService";
import {RequestEndpoint} from "@leight-core/server/lib/cjs/endpoint/endpoints";

export default RequestEndpoint<"CheckPrice", ICheckRequest, ICheckResponse>(async ({request, toUserId}) => TransactionService(defaults(toUserId())).check(request));
