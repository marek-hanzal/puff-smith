import {AtomizerInventorySource} from "@/puff-smith/service/atomizer/inventory/AtomizerInventorySource";
import {IAtomizerInventorySource} from "@/puff-smith/service/atomizer/inventory/interface";
import {FetchEndpoint} from "@leight-core/server";

export default FetchEndpoint<"Atomizer", IAtomizerInventorySource>(AtomizerInventorySource);
