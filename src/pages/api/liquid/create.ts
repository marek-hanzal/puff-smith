import {ServiceCreate} from "@/puff-smith/service";
import {ILiquid, ILiquidCreate} from "@/puff-smith/service/liquid/interface";
import {LiquidService} from "@/puff-smith/service/liquid/LiquidService";
import cache from "@/puff-smith/service/side-effect/cache";
import {handlePuffiesException} from "@/puff-smith/service/transaction/utils";
import {CreateEndpoint} from "@leight-core/server";

export default CreateEndpoint<"Create", ILiquidCreate, ILiquid>(async (
		{res, request, toUserId}
	) => handlePuffiesException(res, async () => {
		try {
			return await LiquidService(ServiceCreate(toUserId())).handleCreate({request});
		} finally {
			cache.clear();
		}
	})
);
