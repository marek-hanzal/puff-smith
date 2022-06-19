import {AromaInventoryCommentSource} from "@/puff-smith/service/aroma/inventory/comment/AromaInventoryCommentSource";
import {IAromaInventoryCommentSource} from "@/puff-smith/service/aroma/inventory/comment/interface";
import {CountEndpoint} from "@leight-core/server";

export default CountEndpoint<"AromaInventoryCommentCount", IAromaInventoryCommentSource>(AromaInventoryCommentSource);
