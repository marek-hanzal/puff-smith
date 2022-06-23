import {IUserSource} from "@/puff-smith/service/user/interface";
import {UserSource} from "@/puff-smith/service/user/UserSource";
import {CountEndpoint} from "@leight-core/server";

export default CountEndpoint<"UserCount", IUserSource>({
	source: UserSource,
});
