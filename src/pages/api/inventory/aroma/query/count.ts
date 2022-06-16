import {AromaInventorySource} from "@/puff-smith/service/aroma/inventory/AromaInventorySource";
import {IAromaInventorySource} from "@/puff-smith/service/aroma/inventory/interface";
import {CountEndpoint} from "@leight-core/server";

export default CountEndpoint<"AromaInventoryCount", IAromaInventorySource>(AromaInventorySource);
