import {ChunkService, IChunkCommit} from "@/puff-smith/component/temp";
import {MutationEndpoint} from "@leight-core/server";
import {IFile} from "@leight-core/api";

export default MutationEndpoint<"Commit", IChunkCommit, IFile, { chunkId: string }>(({req, res}) => {
	ChunkService().commit(req.query.chunkId, req.body);
	res.status(200).end('ok');
});
