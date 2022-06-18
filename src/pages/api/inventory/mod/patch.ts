import {IModInventorySource} from "@/puff-smith/service/mod/inventory/interface";
import {ModInventorySource} from "@/puff-smith/service/mod/inventory/ModInventorySource";
import {PatchEndpoint} from "@leight-core/server";

export default PatchEndpoint<"Patch", IModInventorySource>(ModInventorySource);
