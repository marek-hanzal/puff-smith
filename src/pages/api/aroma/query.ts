import {AromaSource}      from "@/puff-smith/service/aroma/AromaSource";
import {ContainerPromise} from "@/puff-smith/service/Container";
import {QueryEndpoint}    from "@leight-core/server";

export default QueryEndpoint({
	name:      "Aroma",
	container: ContainerPromise,
	source:    AromaSource,
});
