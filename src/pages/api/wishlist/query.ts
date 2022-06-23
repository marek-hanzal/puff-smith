import {IWishlistSource} from "@/puff-smith/service/wishlist/interface";
import {WishlistSource} from "@/puff-smith/service/wishlist/WishlistSource";
import {QueryEndpoint} from "@leight-core/server";

export default QueryEndpoint<"Wishlist", IWishlistSource>({
	source: WishlistSource,
});
