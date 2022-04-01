import {CreateEndpoint} from "@leight-core/server";
import {ILiquid, ILiquidQuickMix, LiquidService} from "@/puff-smith/service/liquid";
import {handlePuffiesException} from "@/puff-smith/site/shared/transaction";

export default CreateEndpoint<"QuickMix", Omit<ILiquidQuickMix, "userId">, ILiquid>(async ({res, request, toUserId}) => handlePuffiesException(res, async () => LiquidService().handleQuickMix({
	request: {
		...request,
		userId: await toUserId(),
	}
})));
