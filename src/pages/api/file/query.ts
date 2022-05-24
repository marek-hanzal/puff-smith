import {FileSource} from "@/puff-smith/service/file/FileSource";
import {IFileSource} from "@/puff-smith/service/file/interface";
import {QueryEndpoint} from "@leight-core/server";

export default QueryEndpoint<"File", IFileSource>(FileSource());
