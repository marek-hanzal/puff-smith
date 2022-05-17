import {defaults} from "@/puff-smith/service";
import {AtomizerInventoryService} from "@/puff-smith/service/atomizer/inventory/AtomizerInventoryService";
import {IAtomizerInventory, IAtomizerInventoryCreate} from "@/puff-smith/service/atomizer/inventory/interface";
import {handlePuffiesException} from "@/puff-smith/service/transaction/utils";
import {MutationEndpoint} from "@leight-core/server";

export default MutationEndpoint<"Create", IAtomizerInventoryCreate, IAtomizerInventory>(async (
		{
			res,
			request,
			toUserId,
		}
	) => handlePuffiesException(res, async () => AtomizerInventoryService(defaults(toUserId())).handleCreate({request}))
);
