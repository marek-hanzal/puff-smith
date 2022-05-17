import {ofRequest} from "@/puff-smith/service";
import {IUser} from "@/puff-smith/service/user/interface";
import {UserService} from "@/puff-smith/service/user/UserService";
import {FetchEndpoint} from "@leight-core/server";

export default FetchEndpoint<"Whoami", IUser>(async params => UserService(ofRequest(params)).whoami());
