import {FetchEndpoint} from "@leight-core/server";
import {IUser, UserService} from "@/puff-smith/service/user";

export default FetchEndpoint<"Whoami", IUser>(async ({toUserId}) => UserService().toMap(await toUserId()));
