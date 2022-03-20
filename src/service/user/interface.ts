import {Prisma, User} from "@prisma/client";
import {IQuery} from "@leight-core/api";

export type IUsers = Promise<User[]>;

export type IUserFilter = Prisma.UserWhereInput & { fulltext?: string };
export type IUserOrderBy = Prisma.UserOrderByWithRelationInput;

export interface IUserQuery extends IQuery<IUserFilter, IUserOrderBy> {
}

export interface IUser {
	id: string;
	name?: string | null;
	email?: string | null;
	image?: string | null;
}
