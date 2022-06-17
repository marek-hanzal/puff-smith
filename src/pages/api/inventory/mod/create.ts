import {IModInventorySource} from "@/puff-smith/service/mod/inventory/interface";
import {ModInventorySource} from "@/puff-smith/service/mod/inventory/ModInventorySource";
import {CreateEndpoint} from "@leight-core/server";

export default CreateEndpoint<"Create", IModInventorySource>(ModInventorySource);
