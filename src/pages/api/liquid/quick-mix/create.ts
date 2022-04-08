import {ServerBootstrap} from "@/puff-smith/service/bootstrap";
import {ILiquid, ILiquidQuickMix, LiquidService} from "@/puff-smith/service/liquid";
import {handlePuffiesException} from "@/puff-smith/service/transaction";
import {CreateEndpoint} from "@leight-core/server";

ServerBootstrap();

export default CreateEndpoint<"CreateQuickMix", Omit<ILiquidQuickMix, "userId">, ILiquid>(async ({res, request, toUserId}) => handlePuffiesException(res, async () => LiquidService().handleQuickMix({
	request: {
		...request,
		userId: toUserId(),
	}
})));
