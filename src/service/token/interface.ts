import {IServiceCreate} from "@/puff-smith/service";
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

export interface ITokenFetchProps {
	token: IToken;
}

export interface ITokenFetchQuery extends ParsedUrlQuery {
	tokenId: string;
}

export interface ITokenSourceCreate extends IServiceCreate {
}

export interface ITokenSource extends ISource<ITokenCreate, Token, IToken, ITokenQuery, ITokenFetchProps, ITokenFetchQuery> {
	tokensOf(userId: string): Promise<IToken[]>;
}
