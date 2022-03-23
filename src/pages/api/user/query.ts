import {QueryEndpoint} from "@leight-core/server";
import {IUser, IUserQuery, UserService} from "@/puff-smith/service/user";

export default QueryEndpoint<"Users", IUserQuery, IUser>(async ({request}) => UserService().query(request));
