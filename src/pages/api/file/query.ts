import {ContainerPromise} from "@/puff-smith/service/Container";
import {FileSource}       from "@/puff-smith/service/file/FileSource";
import {QueryEndpoint}    from "@leight-core/server";

export default QueryEndpoint({
	name:      "File",
	container: ContainerPromise,
	source:    FileSource,
});
