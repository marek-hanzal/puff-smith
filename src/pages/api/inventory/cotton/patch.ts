import {CottonInventorySource} from "@/puff-smith/service/cotton/inventory/CottonInventorySource";
import {ICottonInventorySource} from "@/puff-smith/service/cotton/inventory/interface";
import {PatchEndpoint} from "@leight-core/server";

export default PatchEndpoint<"Patch", ICottonInventorySource>(CottonInventorySource);
