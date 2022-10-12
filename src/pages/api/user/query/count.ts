import {asyncContainer} from "@/puff-smith/service/Container";
import {UserSource}     from "@/puff-smith/service/user/UserSource";
import {CountEndpoint}  from "@leight-core/server";

export default CountEndpoint({
	name:      "UserCount",
	container: asyncContainer,
	source:    UserSource,
});
