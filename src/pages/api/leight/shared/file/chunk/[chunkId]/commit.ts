import {CommitChunkEndpoint, Endpoint, IChunkEndpointQuery} from "@leight-core/server";
import {IChunkCommit, IFile} from "@leight-core/api";
import {chunkService} from "@/puff-smith/service/chunk";
import {getToken} from "next-auth/jwt";
import prismaClient from "@/puff-smith/service/prisma";

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
