import {ContainerPromise} from "@/puff-smith/service/Container";
import {FileSource}       from "@/puff-smith/service/file/FileSource";
import {DeleteEndpoint}   from "@leight-core/server";

export default DeleteEndpoint({
	name:      "FileDelete",
	container: ContainerPromise,
	source:    FileSource,
});
