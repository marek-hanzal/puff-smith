import {MutationEndpoint} from "@leight-core/endpoint";
import {IFile} from "@leight-core/api";

export interface ICommitRequest {
	path: string;
	name: string,
	replace: boolean;
}

export default MutationEndpoint<"Commit", ICommitRequest, IFile, { chunkId: string }>(({req, res}) => {
	res.status(200).end('ok');
});
