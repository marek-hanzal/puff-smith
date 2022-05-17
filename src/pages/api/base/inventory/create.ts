import {defaults} from "@/puff-smith/service";
import {BaseInventoryService} from "@/puff-smith/service/base/inventory/BaseInventoryService";
import {IBaseInventory, IBaseInventoryCreate} from "@/puff-smith/service/base/inventory/interface";
import {handlePuffiesException} from "@/puff-smith/service/transaction/utils";
import {MutationEndpoint} from "@leight-core/server";

export default MutationEndpoint<"Create", IBaseInventoryCreate, IBaseInventory>(async (
		{
			res,
			request,
			toUserId,
		}
	) => handlePuffiesException(res, async () => BaseInventoryService(defaults(toUserId())).handleCreate({request}))
);
