import {chunkService} from "@/puff-smith/service/chunk/service";
import {
    asyncContainer,
    ContainerClass
}                     from "@/puff-smith/service/Container";
import prismaClient   from "@/puff-smith/service/side-effect/prisma";
import {
    CommitChunkEndpoint,
    Endpoint,
    IChunkCommit,
    IChunkEndpointQuery,
    IFile
}                     from "@leight-core/viv";

export default Endpoint<ContainerClass, IChunkCommit, IFile, IChunkEndpointQuery>(CommitChunkEndpoint({
	container:        asyncContainer,
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
