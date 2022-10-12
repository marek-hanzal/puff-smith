import {ContainerPromise} from "@/puff-smith/service/Container";
import {UserSource}       from "@/puff-smith/service/user/UserSource";
import {QueryEndpoint}    from "@leight-core/server";

export default QueryEndpoint({
	name:      "User",
	container: ContainerPromise,
	source:    UserSource,
});
