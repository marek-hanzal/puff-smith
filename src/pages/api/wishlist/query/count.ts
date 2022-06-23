import {IWishlistSource} from "@/puff-smith/service/wishlist/interface";
import {WishlistSource} from "@/puff-smith/service/wishlist/WishlistSource";
import {CountEndpoint} from "@leight-core/server";

export default CountEndpoint<"WishlistCount", IWishlistSource>({
	source: WishlistSource,
});
