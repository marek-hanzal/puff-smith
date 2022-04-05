import {ILiquid, ILiquidQuickMix, LiquidService} from "@/puff-smith/service/liquid";
import {handlePuffiesException} from "@/puff-smith/service/transaction";
import {CreateEndpoint} from "@leight-core/server";

export default CreateEndpoint<"QuickMix", Omit<ILiquidQuickMix, "userId">, ILiquid>(async ({res, request, toUserId}) => handlePuffiesException(res, async () => LiquidService().handleQuickMix({
	request: {
		...request,
		userId: await toUserId(),
	}
})));
