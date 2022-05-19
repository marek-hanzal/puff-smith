import {ofParams} from "@/puff-smith/service";
import {ICottonInventory, ICottonInventoryDelete} from "@/puff-smith/service/cotton/inventory/interface";
import {DeleteEndpoint} from "@leight-core/server";
import {CottonInventoryRepository} from "../../../../service/cotton/inventory/CottonInventoryRepository";

export default DeleteEndpoint<"Delete", ICottonInventoryDelete, ICottonInventory[]>(async params => CottonInventoryRepository(ofParams(params)).handleDelete(params));
