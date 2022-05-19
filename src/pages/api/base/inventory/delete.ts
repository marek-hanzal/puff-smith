import {defaults} from "@/puff-smith/service";
import {BaseInventoryRepository} from "@/puff-smith/service/base/inventory/BaseInventoryRepository";
import {IBaseInventory, IBaseInventoryDelete} from "@/puff-smith/service/base/inventory/interface";
import {DeleteEndpoint} from "@leight-core/server";

export default DeleteEndpoint<"Delete", IBaseInventoryDelete, IBaseInventory[]>(async ({request, toUserId}) => BaseInventoryRepository(defaults(toUserId())).handleDelete({request}));
