import {defaults} from "@/puff-smith/service";
import {BoosterInventoryService} from "@/puff-smith/service/booster/inventory/BoosterInventoryService";
import {IBoosterInventory, IBoosterInventoryDelete} from "@/puff-smith/service/booster/inventory/interface";
import {DeleteEndpoint} from "@leight-core/server";

export default DeleteEndpoint<"Delete", IBoosterInventoryDelete, IBoosterInventory[]>(async ({request, toUserId}) => BoosterInventoryService(defaults(toUserId())).handleDelete({request}));
