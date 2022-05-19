import {ofRequest} from "@/puff-smith/service";
import {IUser} from "@/puff-smith/service/user/interface";
import {UserRepository} from "@/puff-smith/service/user/UserRepository";
import {FetchEndpoint} from "@leight-core/server";

export default FetchEndpoint<"Whoami", IUser>(async params => UserRepository(ofRequest(params)).whoami());
