import {AromaSource} from "@/puff-smith/service/aroma/AromaSource";
import {IAromaSource} from "@/puff-smith/service/aroma/interface";
import {CountEndpoint} from "@leight-core/server";

export default CountEndpoint<"AromaCount", IAromaSource>({
	source: AromaSource,
});
