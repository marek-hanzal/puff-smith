import {chunkService} from "@/puff-smith/service/chunk";
import prismaClient from "@/puff-smith/service/prisma";
import {IChunkCommit, IFile} from "@leight-core/api";
import {CommitChunkEndpoint, Endpoint, IChunkEndpointQuery} from "@leight-core/server";
import {getToken} from "next-auth/jwt";

export default Endpoint<"Commit", IChunkCommit, IFile, IChunkEndpointQuery>(CommitChunkEndpoint(chunkService, async (file, params) => {
	const token: any = await getToken({req: params.req});
	await prismaClient.file.create({
		data: {
			...file,
			user: {
				connect: {
					id: token.sub,
				}
			}
		}
	});
	return file;
}));
