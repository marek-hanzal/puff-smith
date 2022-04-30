import {ServiceCreate} from "@/puff-smith/service";
import {IModInventory, IModInventoryCreate} from "@/puff-smith/service/mod/inventory/interface";
import {ModInventoryService} from "@/puff-smith/service/mod/inventory/ModInventoryService";
import {handlePuffiesException} from "@/puff-smith/service/transaction/utils";
import {MutationEndpoint} from "@leight-core/server";

export default MutationEndpoint<"Create", IModInventoryCreate, IModInventory>(async (
	{res, request, toUserId}) => handlePuffiesException(res, async () => ModInventoryService(ServiceCreate(toUserId())).handleCreate({request}))
);
