import {ILiquid, ILiquidCreate, LiquidService} from "@/puff-smith/service/liquid";
import {handlePuffiesException} from "@/puff-smith/service/transaction";
import {CreateEndpoint} from "@leight-core/server";

export default CreateEndpoint<"Create", Omit<ILiquidCreate, "userId">, ILiquid>(async ({res, request, toUserId}) => handlePuffiesException(res, async () => LiquidService().handleCreate({
	request: {
		...request,
		userId: toUserId(),
	}
})));
