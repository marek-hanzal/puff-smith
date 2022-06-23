import {IWishlistSource} from "@/puff-smith/service/wishlist/interface";
import {WishlistSource} from "@/puff-smith/service/wishlist/WishlistSource";
import {CreateEndpoint} from "@leight-core/server";

export default CreateEndpoint<"Create", IWishlistSource>({
	source: WishlistSource,
});
