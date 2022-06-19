import {ITag, IWithTag} from "@/puff-smith/service/tag/interface";
import {IQuery, ISource, IWithFulltext} from "@leight-core/api";
import {Prisma, Wishlist} from "@prisma/client";
import {ParsedUrlQuery} from "querystring";

export interface IWishlistCreate {
	name: string;
	url?: string;
	cost?: number;
	note?: string;
	tags?: string[];
}

export interface IWishlistQuery extends IQuery<Prisma.WishlistWhereInput & IWithFulltext, Prisma.WishlistOrderByWithRelationInput> {
}

export type IWishlistEntity<T = void> = T extends void ? Wishlist : Wishlist & T;
export type IWithWishlist<T = void> = { whishlist: IWishlistEntity<T>; };

export interface IWishlist {
	id: string;
	name: string;
	url?: string | null;
	cost?: number | null;
	note?: string | null;
	tags: ITag[];
}

export interface IWishlistFetch {
	whishlist: IWishlist;
}

export interface IWishlistFetchParams extends ParsedUrlQuery {
	whishlistId: string;
}

export interface IWishlistSource extends ISource<IWishlistCreate, IWishlistEntity<{ WishlistTag: IWithTag[] }>, IWishlist, IWishlistQuery, IWishlistFetch, IWishlistFetchParams> {
}
