import {IUser, IUserQuery, UserService} from "@/puff-smith/service/user";
import {QueryEndpoint} from "@leight-core/server";

export default QueryEndpoint<"Users", IUserQuery, IUser>(UserService().handleQuery);
