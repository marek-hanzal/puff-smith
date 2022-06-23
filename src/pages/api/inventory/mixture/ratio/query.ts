import {MixtureRatioSource} from "@/puff-smith/service/mixture/inventory/ratio/MixtureRatioSource";
import {IMixtureRatioSource} from "@/puff-smith/service/mixture/ratio/interface";
import {QueryEndpoint} from "@leight-core/server";

export default QueryEndpoint<"Ratio", IMixtureRatioSource>({
	source: MixtureRatioSource,
});
