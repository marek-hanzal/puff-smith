import {IMixtureDrawSource} from "@/puff-smith/service/mixture/draw/interface";
import {MixtureDrawSource} from "@/puff-smith/service/mixture/inventory/draw/MixtureDrawSource";
import {QueryEndpoint} from "@leight-core/server";

export default QueryEndpoint<"Draw", IMixtureDrawSource>({
	source: MixtureDrawSource,
});
