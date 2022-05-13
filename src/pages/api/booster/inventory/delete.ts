import {ServiceCreate} from "@/puff-smith/service";
import {BoosterInventoryService} from "@/puff-smith/service/booster/inventory/BoosterInventoryService";
import {IBoosterInventory, IBoosterInventoryDelete} from "@/puff-smith/service/booster/inventory/interface";
import {MutationEndpoint} from "@leight-core/server";

export default MutationEndpoint<"Delete", IBoosterInventoryDelete, IBoosterInventory[]>(async ({request, toUserId}) => BoosterInventoryService(ServiceCreate(toUserId())).handleDelete({request}));
