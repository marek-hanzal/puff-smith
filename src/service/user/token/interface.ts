import {IQuery, ISource} from "@leight-core/api";
import {Prisma, UserToken} from "@prisma/client";

export interface IUserTokenCreate {
	userId: string;
	tokenId: string;
}

export interface IUserTokenQuery extends IQuery<Prisma.UserTokenWhereInput, Prisma.UserTokenOrderByWithRelationInput> {
}

export type IUserTokenEntity = UserToken;
export type IWithUserTokenEntity = { UserToken: IUserTokenEntity[]; };

export interface IUserToken {
	id: string;
	userId: string;
	tokenId: string;
}

export interface IUserTokenSource extends ISource<IUserTokenCreate, IUserTokenEntity, IUserToken, IUserTokenQuery> {
}
