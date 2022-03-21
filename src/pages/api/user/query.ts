import {QueryEndpoint} from "@leight-core/server";
import {IUser, IUserQuery, userQuery} from "@/puff-smith/service/user";

export default QueryEndpoint<"Users", IUserQuery, IUser>(async ({req: {body}}) => userQuery(body));
