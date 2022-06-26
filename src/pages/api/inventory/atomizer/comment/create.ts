import {AtomizerInventoryCommentSource} from "@/puff-smith/service/atomizer/inventory/comment/AtomizerInventoryCommentSource";
import {IAtomizerInventoryCommentSource} from "@/puff-smith/service/atomizer/inventory/comment/interface";
import {CreateEndpoint} from "@leight-core/server";

export default CreateEndpoint<"Create", IAtomizerInventoryCommentSource>({
	source: AtomizerInventoryCommentSource,
});
