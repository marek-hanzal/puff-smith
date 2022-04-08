import {ServerBootstrap} from "@/puff-smith/service/bootstrap";
import {chunkService} from "@/puff-smith/service/chunk";
import prismaClient from "@/puff-smith/service/prisma";
import {IChunkCommit, IFile} from "@leight-core/api";
import {CommitChunkEndpoint, Endpoint, IChunkEndpointQuery} from "@leight-core/server";

ServerBootstrap();

export default Endpoint<"Commit", IChunkCommit, IFile, IChunkEndpointQuery>(CommitChunkEndpoint(chunkService, async (file, {toUserId}) => {
	await prismaClient.file.create({
		data: {
			...file,
			user: {
				connect: {
					id: toUserId(),
				}
			}
		}
	});
	return file;
}));
