import {ILiquid, ILiquidCleverMix, LiquidService} from "@/puff-smith/service/liquid";
import {handlePuffiesException} from "@/puff-smith/service/transaction";
import {CreateEndpoint} from "@leight-core/server";

export default CreateEndpoint<"CreateCleverMix", Omit<ILiquidCleverMix, "userId">, ILiquid>(async ({res, request, toUserId}) => handlePuffiesException(res, async () => LiquidService().handleCleverMix({
	request: {
		...request,
		userId: toUserId(),
	}
})));
