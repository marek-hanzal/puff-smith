import {ICheckRequest, ICheckResponse} from "@/puff-smith/service/transaction/interface";
import {TransactionSource} from "@/puff-smith/service/transaction/TransactionSource";
import {RequestEndpoint} from "@leight-core/server/lib/cjs/endpoint/endpoints";

export default RequestEndpoint<"CheckPrice", ICheckRequest, ICheckResponse>({
	handler: async ({request, user}) => TransactionSource().withUser(user).check(request),
});
