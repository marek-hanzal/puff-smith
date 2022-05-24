import {IQuery, ISource} from "@leight-core/api";
import {Prisma, Token} from "@prisma/client";
import {ParsedUrlQuery} from "querystring";

export interface IToken {
	id: string;
	name: string;
	until?: Date | null;
}

export interface ITokenCreate {
	name: string;
	until?: Date | null;
}

export interface ITokenQuery extends IQuery<Prisma.TokenWhereInput, Prisma.TokenOrderByWithRelationInput> {
}

export type ITokenEntity = Token;
export type IWithTokenEntity = { token: ITokenEntity; };

export interface ITokenFetchProps {
	token: IToken;
}

export interface ITokenFetchQuery extends ParsedUrlQuery {
	tokenId: string;
}

export interface ITokenSource extends ISource<ITokenCreate, ITokenEntity, IToken, ITokenQuery> {
	tokensOf(userId: string): Promise<IToken[]>;
}
