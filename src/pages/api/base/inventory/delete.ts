import {ServiceCreate} from "@/puff-smith/service";
import {BaseInventoryService} from "@/puff-smith/service/base/inventory/BaseInventoryService";
import {IBaseInventory, IBaseInventoryDelete} from "@/puff-smith/service/base/inventory/interface";
import {MutationEndpoint} from "@leight-core/server";

export default MutationEndpoint<"Delete", IBaseInventoryDelete, IBaseInventory[]>(async ({request, toUserId}) => BaseInventoryService(ServiceCreate(toUserId())).handleDelete({request}));
