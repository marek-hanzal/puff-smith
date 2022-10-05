import {AromaSource}   from "@/puff-smith/service/aroma/AromaSource";
import {IAromaSource}  from "@/puff-smith/service/aroma/interface";
import {QueryEndpoint} from "@leight-core/server";

export default QueryEndpoint<"Aroma", IAromaSource>({
	source: AromaSource,
});
