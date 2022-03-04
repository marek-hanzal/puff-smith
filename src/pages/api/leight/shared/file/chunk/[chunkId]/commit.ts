import {CommitChunkEndpoint, Endpoint} from "@leight-core/server";
import {IChunkCommit, IFile} from "@leight-core/api";

export default Endpoint<"Commit", IChunkCommit, IFile, { chunkId: string; }>(CommitChunkEndpoint());
