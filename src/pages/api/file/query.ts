import {QueryEndpoint} from "@leight-core/server";
import {IFile} from "@leight-core/api";
import {fileQuery, IFileQuery} from "@/puff-smith/service/file";

export default QueryEndpoint<"Files", IFileQuery, IFile>(async ({req: {body}}) => fileQuery(body));
