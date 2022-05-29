import {AtomizerInventorySource} from "@/puff-smith/service/atomizer/inventory/AtomizerInventorySource";
import {IAtomizerInventorySource} from "@/puff-smith/service/atomizer/inventory/interface";
import {DeleteEndpoint} from "@leight-core/server";

export default DeleteEndpoint<"Delete", IAtomizerInventorySource>(AtomizerInventorySource());
