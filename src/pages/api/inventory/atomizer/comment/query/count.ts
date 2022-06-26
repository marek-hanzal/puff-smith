import {AtomizerInventoryCommentSource} from "@/puff-smith/service/atomizer/inventory/comment/AtomizerInventoryCommentSource";
import {IAtomizerInventoryCommentSource} from "@/puff-smith/service/atomizer/inventory/comment/interface";
import {CountEndpoint} from "@leight-core/server";

export default CountEndpoint<"AtomizerInventoryCommentCount", IAtomizerInventoryCommentSource>({
	source: AtomizerInventoryCommentSource,
});
