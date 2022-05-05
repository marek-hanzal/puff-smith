import {ServiceCreate} from "@/puff-smith/service";
import {ILiquid, ILiquidDelete} from "@/puff-smith/service/liquid/interface";
import {LiquidService} from "@/puff-smith/service/liquid/LiquidService";
import cache from "@/puff-smith/service/side-effect/cache";
import {MutationEndpoint} from "@leight-core/server";

export default MutationEndpoint<"Delete", ILiquidDelete, ILiquid[]>(async ({request, toUserId}) => {
	try {
		return await LiquidService(ServiceCreate(toUserId())).handleDelete({request});
	} finally {
		cache.clear();
	}
});
