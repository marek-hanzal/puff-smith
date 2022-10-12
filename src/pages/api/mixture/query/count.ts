import {asyncContainer} from "@/puff-smith/service/Container";
import {MixtureSource}  from "@/puff-smith/service/mixture/MixtureSource";
import {CountEndpoint}  from "@leight-core/server";

export default CountEndpoint({
	name:      "MixtureCount",
	container: asyncContainer,
	source:    MixtureSource,
});
