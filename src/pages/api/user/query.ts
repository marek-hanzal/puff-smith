import {ofRequest} from "@/puff-smith/service";
import {IUser, IUserQuery} from "@/puff-smith/service/user/interface";
import {UserRepository} from "@/puff-smith/service/user/UserRepository";
import {QueryEndpoint} from "@leight-core/server";

export default QueryEndpoint<"User", IUserQuery, IUser>(async params => UserRepository(ofRequest(params)).handleQuery(params));
