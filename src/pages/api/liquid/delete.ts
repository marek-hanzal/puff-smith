import {ILiquid, ILiquidDelete} from "@/puff-smith/service/liquid/interface";
import {LiquidService} from "@/puff-smith/service/liquid/LiquidService";
import {MutationEndpoint} from "@leight-core/server";

export default MutationEndpoint<"Delete", Omit<ILiquidDelete, "userId">, ILiquid[]>(async ({request, toUserId}) => LiquidService().handleDelete({
	request: {
		...request,
		userId: toUserId(),
	}
}));
