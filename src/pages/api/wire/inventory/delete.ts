import {ofParams} from "@/puff-smith/service";
import {IWireInventory, IWireInventoryDelete} from "@/puff-smith/service/wire/inventory/interface";
import {DeleteEndpoint} from "@leight-core/server";
import {WireInventoryRepository} from "../../../../service/wire/inventory/WireInventoryRepository";

export default DeleteEndpoint<"Delete", IWireInventoryDelete, IWireInventory[]>(async params => WireInventoryRepository(ofParams(params)).handleDelete(params));
