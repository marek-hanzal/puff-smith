import {asyncContainer} from "@/puff-smith/service/Container";
import {FileSource}     from "@/puff-smith/service/file/FileSource";
import {DeleteEndpoint} from "@leight-core/viv";

export default DeleteEndpoint({
	name:      "FileDelete",
	container: asyncContainer,
	source:    FileSource,
});
