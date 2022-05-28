import {IModInventorySource} from "@/puff-smith/service/mod/inventory/interface";
import {ModInventorySource} from "@/puff-smith/service/mod/inventory/ModInventorySource";
import {CountEndpoint} from "@leight-core/server";

export default CountEndpoint<"ModInventoryCount", IModInventorySource>(ModInventorySource());
