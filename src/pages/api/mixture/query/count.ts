import {IMixtureSource} from "@/puff-smith/service/mixture/interface";
import {MixtureSource}  from "@/puff-smith/service/mixture/MixtureSource";
import {CountEndpoint}  from "@leight-core/server";

export default CountEndpoint<"MixtureCount", IMixtureSource>({
	source: MixtureSource,
});
