import {ofRequest} from "@/puff-smith/service";
import {IUser, IUserQuery} from "@/puff-smith/service/user/interface";
import {UserService} from "@/puff-smith/service/user/UserService";
import {QueryEndpoint} from "@leight-core/server";

export default QueryEndpoint<"User", IUserQuery, IUser>(async params => UserService(ofRequest(params)).handleQuery(params));
