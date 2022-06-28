import {IFileSource} from "@/puff-smith/service/file/interface";
import prisma from "@/puff-smith/service/side-effect/prisma";
import {Source} from "@leight-core/server";

export const FileSource = (): IFileSource => {
	const source: IFileSource = Source<IFileSource>({
		name: "file",
		prisma,
		map: async file => file ? {
			...file,
			created: file.created.toUTCString(),
			updated: file?.updated?.toUTCString(),
			ttl: file.ttl || undefined,
		} : null,
		source: {
			get: async id => source.prisma.file.findUniqueOrThrow({
				where: {id},
			}),
		}
	});

	return source;
};
