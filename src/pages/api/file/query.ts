import {QueryEndpoint} from "@leight-core/server";
import {IFile} from "@leight-core/api";
import {fileQuery, IFileFilter, IFileOrderBy, IFileQuery} from "@/puff-smith/service/file";

export default QueryEndpoint<"Files", IFileQuery, IFile, IFileFilter, IFileOrderBy>(async ({req: {body}}) => fileQuery(body));
