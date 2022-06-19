import {IWishlistSource} from "@/puff-smith/service/wishlist/interface";
import {WishlistSource} from "@/puff-smith/service/wishlist/WishlistSource";
import {DeleteEndpoint} from "@leight-core/server";

export default DeleteEndpoint<"Delete", IWishlistSource>(WishlistSource);
