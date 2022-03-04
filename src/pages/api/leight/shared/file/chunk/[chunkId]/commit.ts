import {CommitChunkEndpoint, Endpoint, IChunkEndpointQuery} from "@leight-core/server";
import {IChunkCommit, IFile} from "@leight-core/api";
import chunkService from "@/puff-smith/service/chunk";
import {getSession} from "next-auth/react";

export default Endpoint<"Commit", IChunkCommit, IFile, IChunkEndpointQuery>(CommitChunkEndpoint(chunkService, async (file, params) => {
	const session = await getSession({req: params.req});
	console.log('wanna persist, yaaay; user id', session);
	return file;
}));
