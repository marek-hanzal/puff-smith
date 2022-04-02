import {CreateEndpoint} from "@leight-core/server";
import {ILiquid, ILiquidCreate, LiquidService} from "@/puff-smith/service/liquid";
import {handlePuffiesException} from "@/puff-smith/service/transaction";

export default CreateEndpoint<"Create", Omit<ILiquidCreate, "userId">, ILiquid>(async ({res, request, toUserId}) => handlePuffiesException(res, async () => LiquidService().handleCreate({
	request: {
		...request,
		userId: await toUserId(),
	}
})));
