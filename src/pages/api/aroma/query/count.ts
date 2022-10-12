import {AromaSource}      from "@/puff-smith/service/aroma/AromaSource";
import {ContainerPromise} from "@/puff-smith/service/Container";
import {CountEndpoint}    from "@leight-core/server";

export default CountEndpoint({
	name:      "AromaCount",
	container: ContainerPromise,
	source:    AromaSource,
});
