import {ofRequest} from "@/puff-smith/service";
import {CottonInventoryService} from "@/puff-smith/service/cotton/inventory/CottonInventoryService";
import {ICottonInventory, ICottonInventoryDelete} from "@/puff-smith/service/cotton/inventory/interface";
import {DeleteEndpoint} from "@leight-core/server";

export default DeleteEndpoint<"Delete", ICottonInventoryDelete, ICottonInventory[]>(async params => CottonInventoryService(ofRequest(params)).handleDelete(params));
