import {chunkService} from "@/puff-smith/service/chunk/service";
import {
	ContainerClass,
	ContainerPromise
}                     from "@/puff-smith/service/Container";
import prismaClient   from "@/puff-smith/service/side-effect/prisma";
import {
	IChunkCommit,
	IFile
}                     from "@leight-core/api";
import {
	CommitChunkEndpoint,
	Endpoint,
	IChunkEndpointQuery
}                     from "@leight-core/server";

export default Endpoint<ContainerClass, IChunkCommit, IFile, IChunkEndpointQuery>(CommitChunkEndpoint({
	container:        ContainerPromise,
	chunkService,
	chunkCommitEvent: async (file, {user}) => {
		await prismaClient.file.create({
			data: {
				...file,
				user: {
					connect: {
						id: user.required(),
					}
				}
			}
		});
		return file;
	},
}));
