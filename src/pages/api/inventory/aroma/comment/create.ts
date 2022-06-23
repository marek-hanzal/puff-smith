import {AromaInventoryCommentSource} from "@/puff-smith/service/aroma/inventory/comment/AromaInventoryCommentSource";
import {IAromaInventoryCommentSource} from "@/puff-smith/service/aroma/inventory/comment/interface";
import {CreateEndpoint} from "@leight-core/server";

export default CreateEndpoint<"Create", IAromaInventoryCommentSource>({
	source: AromaInventoryCommentSource,
});
