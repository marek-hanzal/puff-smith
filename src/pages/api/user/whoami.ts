import {IUser, UserService} from "@/puff-smith/service/user";
import {FetchEndpoint} from "@leight-core/server";

export default FetchEndpoint<"Whoami", IUser>(async ({toUserId}) => UserService().toMap(await toUserId()));
