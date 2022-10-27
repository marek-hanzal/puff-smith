import {asyncContainer} from "@/puff-smith/service/Container";
import {FileSource}     from "@/puff-smith/service/file/FileSource";
import {QueryEndpoint}  from "@leight-core/viv";

export default QueryEndpoint({
	name:      "File",
	container: asyncContainer,
	source:    FileSource,
});
