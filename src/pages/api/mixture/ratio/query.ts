import {IMixtureRatioSource} from "@/puff-smith/service/mixture/ratio/interface";
import {MixtureRatioSource} from "@/puff-smith/service/mixture/ratio/MixtureRatioSource";
import {QueryEndpoint} from "@leight-core/server";

export default QueryEndpoint<"Ratio", IMixtureRatioSource>({
	source: MixtureRatioSource,
});
