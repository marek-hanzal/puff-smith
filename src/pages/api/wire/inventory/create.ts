import {defaults} from "@/puff-smith/service";
import {handlePuffiesException} from "@/puff-smith/service/transaction/utils";
import {IWireInventory, IWireInventoryCreate} from "@/puff-smith/service/wire/inventory/interface";
import {WireInventoryService} from "@/puff-smith/service/wire/inventory/WireInventoryService";
import {MutationEndpoint} from "@leight-core/server";

export default MutationEndpoint<"Create", IWireInventoryCreate, IWireInventory>(async (
		{
			res,
			request,
			toUserId,
		}
	) => handlePuffiesException(res, async () => WireInventoryService(defaults(toUserId())).handleCreate({request})),
);
