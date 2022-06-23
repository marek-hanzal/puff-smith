import {IMixtureAromaSource} from "@/puff-smith/service/mixture/inventory/aroma/interface";
import {MixtureAromaSource} from "@/puff-smith/service/mixture/inventory/aroma/MixtureAromaSource";
import {QueryEndpoint} from "@leight-core/server";

export default QueryEndpoint<"MixtureAroma", IMixtureAromaSource>({
	source: MixtureAromaSource,
});
