import {ILiquid, ILiquidDelete, LiquidService} from "@/puff-smith/service/liquid";
import {MutationEndpoint} from "@leight-core/server";

export default MutationEndpoint<"Delete", Omit<ILiquidDelete, "userId">, ILiquid[]>(async ({request, toUserId}) => LiquidService().handleDelete({
	request: {
		...request,
		userId: toUserId(),
	}
}));
