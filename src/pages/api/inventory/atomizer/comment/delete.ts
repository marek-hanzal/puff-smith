import {AtomizerInventoryCommentSource} from "@/puff-smith/service/atomizer/inventory/comment/AtomizerInventoryCommentSource";
import {IAtomizerInventoryCommentSource} from "@/puff-smith/service/atomizer/inventory/comment/interface";
import {DeleteEndpoint} from "@leight-core/server";

export default DeleteEndpoint<"Delete", IAtomizerInventoryCommentSource>({
	source: AtomizerInventoryCommentSource,
});
