import {IMixtureSource} from "@/puff-smith/service/mixture/interface";
import {MixtureSource}  from "@/puff-smith/service/mixture/MixtureSource";
import {QueryEndpoint}  from "@leight-core/server";

export default QueryEndpoint<"Mixture", IMixtureSource>({
	source: MixtureSource,
});
