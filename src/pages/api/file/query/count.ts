import {FileSource} from "@/puff-smith/service/file/FileSource";
import {IFileSource} from "@/puff-smith/service/file/interface";
import {CountEndpoint} from "@leight-core/server";

export default CountEndpoint<"FileCount", IFileSource>(FileSource());
