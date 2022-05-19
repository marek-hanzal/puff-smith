import {defaults} from "@/puff-smith/service";
import {BoosterInventoryRepository} from "@/puff-smith/service/booster/inventory/BoosterInventoryRepository";
import {IBoosterInventory, IBoosterInventoryDelete} from "@/puff-smith/service/booster/inventory/interface";
import {DeleteEndpoint} from "@leight-core/server";

export default DeleteEndpoint<"Delete", IBoosterInventoryDelete, IBoosterInventory[]>(async ({request, toUserId}) => BoosterInventoryRepository(defaults(toUserId())).handleDelete({request}));
