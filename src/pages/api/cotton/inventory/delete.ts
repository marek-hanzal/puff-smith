import {CottonInventorySource} from "@/puff-smith/service/cotton/inventory/CottonInventorySource";
import {ICottonInventorySource} from "@/puff-smith/service/cotton/inventory/interface";
import {DeleteEndpoint} from "@leight-core/server";

export default DeleteEndpoint<"Delete", ICottonInventorySource>(CottonInventorySource());
