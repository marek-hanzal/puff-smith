import {CreateEndpoint} from "@leight-core/server";
import {ILiquid, ILiquidCreate, LiquidService} from "@/puff-smith/service/liquid";

export default CreateEndpoint<"Create", Omit<ILiquidCreate, "userId">, ILiquid>(async ({request, toUserId}) => LiquidService().handleCreate({
	request: {
		...request,
		userId: await toUserId(),
	}
}));
