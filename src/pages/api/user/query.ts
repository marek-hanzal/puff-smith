import {IUser, IUserQuery} from "@/puff-smith/service/user/interface";
import {UserService} from "@/puff-smith/service/user/UserService";
import {QueryEndpoint} from "@leight-core/server";

export default QueryEndpoint<"Users", IUserQuery, IUser>(UserService().handleQuery);
