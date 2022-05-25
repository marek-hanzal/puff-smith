import {IUser} from "@/puff-smith/service/user/interface";
import {UserSource} from "@/puff-smith/service/user/UserSource";
import {FetchEndpoint} from "@leight-core/server";

export default FetchEndpoint<"Whoami", IUser>(async ({user}) => UserSource().withUser(user).whoami());
