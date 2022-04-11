import {ICheckRequest, ICheckResponse, TransactionService} from "@/puff-smith/service/transaction";
import {RequestEndpoint} from "@leight-core/server/lib/cjs/endpoint/endpoints";

export default RequestEndpoint<"CheckPrice", Omit<ICheckRequest, "userId">, ICheckResponse>(async ({request, toUserId}) => TransactionService().check({
	userId: toUserId(),
	...request,
}));
