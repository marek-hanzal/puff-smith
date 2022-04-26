import {IUser} from "@/puff-smith/service/user/interface";
import {UserService} from "@/puff-smith/service/user/UserService";
import {FetchEndpoint} from "@leight-core/server";

export default FetchEndpoint<"Whoami", IUser>(async ({toUserId}) => UserService().toMap(toUserId()));
