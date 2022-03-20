import {IUser} from "@/puff-smith/service/user/interface";
import {ParsedUrlQuery} from "querystring";
import {handlePageFetch} from "@leight-core/server";
import {userFetch, userMapper} from "@/puff-smith/service/user/mapper";

export interface IUserFetchProps {
	user: IUser;
}

export interface IUserFetchQuery extends ParsedUrlQuery {
	userId: string;
}

export const handleUserFetch = handlePageFetch<IUserFetchProps, IUserFetchQuery, typeof userFetch>(
	"user",
	"userId",
	userFetch,
	userMapper,
);
