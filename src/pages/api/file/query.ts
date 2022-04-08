import {ServerBootstrap} from "@/puff-smith/service/bootstrap";
import {fileQuery, IFileQuery} from "@/puff-smith/service/file";
import {IFile} from "@leight-core/api";
import {QueryEndpoint} from "@leight-core/server";

ServerBootstrap();

export default QueryEndpoint<"Files", IFileQuery, IFile>(async ({req: {body}}) => fileQuery(body));
