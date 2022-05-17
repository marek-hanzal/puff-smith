import {defaults} from "@/puff-smith/service";
import {CottonInventoryService} from "@/puff-smith/service/cotton/inventory/CottonInventoryService";
import {ICottonInventory, ICottonInventoryCreate} from "@/puff-smith/service/cotton/inventory/interface";
import {handlePuffiesException} from "@/puff-smith/service/transaction/utils";
import {MutationEndpoint} from "@leight-core/server";

export default MutationEndpoint<"Create", ICottonInventoryCreate, ICottonInventory>(async (
		{
			res,
			request,
			toUserId,
		}
	) => handlePuffiesException(res, async () => CottonInventoryService(defaults(toUserId())).handleCreate({request})),
);
