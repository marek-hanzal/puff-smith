import {ContainerClass}     from "@/puff-smith/service/Container";
import {
    IToken,
    IWithTokenEntity
}                           from "@/puff-smith/service/token/interface";
import {IWithNullUserToken} from "@/puff-smith/service/user/token/interface";
import {
    IfVoid,
    IQuery,
    ISource,
    IUser as ICoolUser
}                           from "@leight-core/viv";
import {
    Prisma,
    User
}                           from "@prisma/client";

interface IUserQuery extends IQuery<Prisma.UserWhereInput, Prisma.UserOrderByWithRelationInput> {
}

export type IUserEntity<T = void> = IfVoid<User, T>;
export type IWithUserEntity<T = void> = { user: IUserEntity<T>; };
export type IWithNullUser<T = void> = { user?: IUserEntity<T> | null; };

export interface IUser {
	id: string;
	name?: string | null;
	email?: string | null;
	image?: string | null;
	tokens: IToken[];
	tokenIds: string[];
}

export interface IWithUser {
	user: IUser;
}

export type IUserSourceEntity = IUserEntity<IWithNullUserToken<IWithTokenEntity>>;

export interface IUserSource extends ISource<//
	ContainerClass,
	IUserSourceEntity,
	IUser,
	IUserQuery> {
	handleRootUser(): Promise<any>;

	handleCommonUser(): Promise<any>;

	createToken(token: string): Promise<any>;

	asUser(userId?: string | null): Promise<ICoolUser>;
}
