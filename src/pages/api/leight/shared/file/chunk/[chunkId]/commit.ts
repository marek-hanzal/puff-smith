import {CommitChunkEndpoint, Endpoint, IChunkEndpointQuery} from "@leight-core/server";
import {IChunkCommit, IFile} from "@leight-core/api";
import chunkService from "@/puff-smith/service/chunk";
import {getToken} from "next-auth/jwt";

export default Endpoint<"Commit", IChunkCommit, IFile, IChunkEndpointQuery>(CommitChunkEndpoint(chunkService, async (file, params) => {
	const token: any = await getToken({req: params.req});
	console.log('wanna persist, yaaay; user id', token.id);
	return file;
}));
