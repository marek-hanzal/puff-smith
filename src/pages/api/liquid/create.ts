import {ILiquid, ILiquidCreate} from "@/puff-smith/service/liquid/interface";
import {LiquidService} from "@/puff-smith/service/liquid/LiquidService";
import {handlePuffiesException} from "@/puff-smith/service/transaction/utils";
import {CreateEndpoint} from "@leight-core/server";

export default CreateEndpoint<"Create", Omit<ILiquidCreate, "userId">, ILiquid>(async ({res, request, toUserId}) => handlePuffiesException(res, async () => LiquidService().handleCreate({
	request: {
		...request,
		userId: toUserId(),
	}
})));
