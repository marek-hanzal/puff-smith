import {fileQuery, IFileQuery} from "@/puff-smith/service/file";
import {IFile} from "@leight-core/api";
import {QueryEndpoint} from "@leight-core/server";

export default QueryEndpoint<"Files", IFileQuery, IFile>(async ({req: {body}}) => fileQuery(body));
