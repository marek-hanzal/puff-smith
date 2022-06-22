import {IQuery, ISource, IWithFulltext} from "@leight-core/api";
import {Prisma, Token} from "@prisma/client";
import {ParsedUrlQuery} from "querystring";

export interface IToken {
	id: string;
	name: string;
}

export interface ITokenCreate {
	name: string;
}

export interface ITokenQuery extends IQuery<Prisma.TokenWhereInput & IWithFulltext, Prisma.TokenOrderByWithRelationInput> {
}

export type ITokenEntity<T = void> = T extends void ? Token : Token & T;
export type IWithTokenEntity<T = void> = { token: ITokenEntity<T>; };

export interface ITokenFetch {
	token: IToken;
}

export interface ITokenFetchParams extends ParsedUrlQuery {
	tokenId: string;
}

export interface ITokenSource extends ISource<ITokenCreate, ITokenEntity, IToken, ITokenQuery, ITokenFetch, ITokenFetchParams> {
	tokensOf(userId: string): Promise<IToken[]>;

	fetchByNames(tokens: string[] | string): Promise<ITokenEntity[]>;
}
