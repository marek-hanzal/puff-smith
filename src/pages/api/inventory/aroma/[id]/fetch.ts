import {AromaInventorySource} from "@/puff-smith/service/aroma/inventory/AromaInventorySource";
import {IAromaInventorySource} from "@/puff-smith/service/aroma/inventory/interface";
import {FetchEndpoint} from "@leight-core/server";

export default FetchEndpoint<"Aroma", IAromaInventorySource>(AromaInventorySource);
