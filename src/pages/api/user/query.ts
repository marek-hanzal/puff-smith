import {ServerBootstrap} from "@/puff-smith/service/bootstrap";
import {IUser, IUserQuery, UserService} from "@/puff-smith/service/user";
import {QueryEndpoint} from "@leight-core/server";

ServerBootstrap();

export default QueryEndpoint<"Users", IUserQuery, IUser>(UserService().handleQuery);
