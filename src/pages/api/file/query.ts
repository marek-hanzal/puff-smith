import {IFileQuery} from "@/puff-smith/service/file/interface";
import {fileQuery} from "@/puff-smith/service/file/prisma";
import {IFile} from "@leight-core/api";
import {QueryEndpoint} from "@leight-core/server";

export default QueryEndpoint<"Files", IFileQuery, IFile>(async ({request}) => fileQuery(request));
