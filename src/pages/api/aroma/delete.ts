import {AromaSource}      from "@/puff-smith/service/aroma/AromaSource";
import {ContainerPromise} from "@/puff-smith/service/Container";
import {DeleteEndpoint}   from "@leight-core/server";

export default DeleteEndpoint({
	name:      "AromaDelete",
	container: ContainerPromise,
	source:    AromaSource,
});
