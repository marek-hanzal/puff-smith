import {AromaSource} from "@/puff-smith/service/aroma/AromaSource";
import {IAromaSource} from "@/puff-smith/service/aroma/interface";
import {PatchEndpoint} from "@leight-core/server";

export default PatchEndpoint<"Patch", IAromaSource>({
	source: AromaSource,
});
