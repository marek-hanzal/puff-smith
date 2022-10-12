import {asyncContainer} from "@/puff-smith/service/Container";
import {MixtureSource}  from "@/puff-smith/service/mixture/MixtureSource";
import {QueryEndpoint}  from "@leight-core/server";

export default QueryEndpoint({
	name:      "Mixture",
	container: asyncContainer,
	source:    MixtureSource,
});
