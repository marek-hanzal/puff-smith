import {defaults} from "@/puff-smith/service";
import {ICheckRequest, ICheckResponse} from "@/puff-smith/service/transaction/interface";
import {TransactionRepository} from "@/puff-smith/service/transaction/TransactionRepository";
import {RequestEndpoint} from "@leight-core/server/lib/cjs/endpoint/endpoints";

export default RequestEndpoint<"CheckPrice", ICheckRequest, ICheckResponse>(async ({request, toUserId}) => TransactionRepository(defaults(toUserId())).check(request));
