import {defaults} from "@/puff-smith/service";
import {ILiquid, ILiquidCreate} from "@/puff-smith/service/liquid/interface";
import {LiquidService} from "@/puff-smith/service/liquid/LiquidService";
import {handlePuffiesException} from "@/puff-smith/service/transaction/utils";
import {CreateEndpoint} from "@leight-core/server";

export default CreateEndpoint<"Create", ILiquidCreate, ILiquid>(async (
		{res, request, toUserId}
	) => handlePuffiesException(res, async () => LiquidService(defaults(toUserId())).handleCreate({request}))
);
