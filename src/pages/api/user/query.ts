import {QueryEndpoint} from "@leight-core/server";
import {IUser, IUserFilter, IUserOrderBy, IUserQuery, userQuery} from "@/puff-smith/service/user";

export default QueryEndpoint<"Users", IUserQuery, IUser, IUserFilter, IUserOrderBy>(async ({req: {body}}) => userQuery(body));
