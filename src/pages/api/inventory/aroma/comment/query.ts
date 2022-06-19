import {AromaInventoryCommentSource} from "@/puff-smith/service/aroma/inventory/comment/AromaInventoryCommentSource";
import {IAromaInventoryCommentSource} from "@/puff-smith/service/aroma/inventory/comment/interface";
import {QueryEndpoint} from "@leight-core/server";

export default QueryEndpoint<"AromaInventoryComment", IAromaInventoryCommentSource>(AromaInventoryCommentSource);
