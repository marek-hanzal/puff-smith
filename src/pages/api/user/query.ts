import {IUserSource}   from "@/puff-smith/service/user/interface";
import {UserSource}    from "@/puff-smith/service/user/UserSource";
import {QueryEndpoint} from "@leight-core/server";

export default QueryEndpoint<"User", IUserSource>({
	source: UserSource,
});
