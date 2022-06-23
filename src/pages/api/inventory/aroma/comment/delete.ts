import {AromaInventoryCommentSource} from "@/puff-smith/service/aroma/inventory/comment/AromaInventoryCommentSource";
import {IAromaInventoryCommentSource} from "@/puff-smith/service/aroma/inventory/comment/interface";
import {DeleteEndpoint} from "@leight-core/server";

export default DeleteEndpoint<"Delete", IAromaInventoryCommentSource>({
	source: AromaInventoryCommentSource,
});
