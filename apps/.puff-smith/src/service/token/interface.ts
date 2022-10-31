import {ContainerClass} from "@/puff-smith/service/Container";
import {
    IQuery,
    ISource,
    IWithFulltext
}                       from "@leight-core/viv";
import {
    Prisma,
    Token
}                       from "@prisma/client";

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

export interface ITokenSource extends ISource<//
	ContainerClass,
	ITokenEntity,
	IToken,
	ITokenQuery,
	ITokenCreate> {
	tokensOf(userId: string): Promise<IToken[]>;

	fetchByNames(tokens: string[] | string): Promise<ITokenEntity[]>;
}
