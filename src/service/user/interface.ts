import {IToken, IWithTokenEntity} from "@/puff-smith/service/token/interface";
import {IUserTokenEntity} from "@/puff-smith/service/user/token/interface";
import {IQuery, ISource} from "@leight-core/api";
import {Prisma, User} from "@prisma/client";
import {ParsedUrlQuery} from "querystring";

interface IUserQuery extends IQuery<Prisma.UserWhereInput, Prisma.UserOrderByWithRelationInput> {
}

export type IUserEntity = User & { UserToken: (IUserTokenEntity & IWithTokenEntity)[]; };
export type IWithUserEntity = { user: IUserEntity; };

export interface IUser {
	id: string;
	name?: string | null;
	email?: string | null;
	image?: string | null;
	tokens: IToken[];
	tokenIds: string[];
}

export interface IUserFetchProps {
	user: IUser;
}

export interface IUserFetchQuery extends ParsedUrlQuery {
	userId: string;
}

export interface IUserSource extends ISource<undefined, IUserEntity, IUser, IUserQuery> {
	handleRootUser(): Promise<void>;

	handleCommonUser(): Promise<void>;

	createToken(token: string): Promise<void>;

	whoami(): Promise<IUser>;
}
