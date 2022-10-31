import {asyncContainer} from "@/puff-smith/service/Container";
import {UserSource}     from "@/puff-smith/service/user/UserSource";
import {QueryEndpoint}  from "@leight-core/viv";

export default QueryEndpoint({
	name:      "User",
	container: asyncContainer,
	source:    UserSource,
});
