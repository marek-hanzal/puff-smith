import {AtomizerInventoryCommentSource} from "@/puff-smith/service/atomizer/inventory/comment/AtomizerInventoryCommentSource";
import {IAtomizerInventoryCommentSource} from "@/puff-smith/service/atomizer/inventory/comment/interface";
import {QueryEndpoint} from "@leight-core/server";

export default QueryEndpoint<"AtomizerInventoryComment", IAtomizerInventoryCommentSource>({
	source: AtomizerInventoryCommentSource,
});
