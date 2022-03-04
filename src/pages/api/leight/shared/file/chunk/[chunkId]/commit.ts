import {CommitChunkEndpoint, Endpoint, IChunkEndpointQuery} from "@leight-core/server";
import {IChunkCommit, IFile} from "@leight-core/api";
import {chunkService} from "@/puff-smith/service";

export default Endpoint<"Commit", IChunkCommit, IFile, IChunkEndpointQuery>(CommitChunkEndpoint(chunkService));
