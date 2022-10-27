import {asyncContainer} from "@/puff-smith/service/Container";
import {MixtureSource}  from "@/puff-smith/service/mixture/MixtureSource";
import {QueryEndpoint}  from "@leight-core/viv";

export default QueryEndpoint({
	name:      "Mixture",
	container: asyncContainer,
	source:    MixtureSource,
});
