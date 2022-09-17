import {AromaSource} from "@/puff-smith/service/aroma/AromaSource";
import {IAromaSource} from "@/puff-smith/service/aroma/interface";
import {CreateEndpoint} from "@leight-core/server";

export default CreateEndpoint<"AromaCreate", IAromaSource>({
	source: AromaSource,
});
