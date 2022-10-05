import {FileSource}     from "@/puff-smith/service/file/FileSource";
import {IFileSource}    from "@/puff-smith/service/file/interface";
import {DeleteEndpoint} from "@leight-core/server";

export default DeleteEndpoint<"FileDelete", IFileSource>({
	source: FileSource,
});
