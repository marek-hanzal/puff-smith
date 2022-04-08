import {ServerBootstrap} from "@/puff-smith/service/bootstrap";
import {IUser, UserService} from "@/puff-smith/service/user";
import {FetchEndpoint} from "@leight-core/server";

ServerBootstrap();

export default FetchEndpoint<"Whoami", IUser>(async ({toUserId}) => UserService().toMap(toUserId()));
