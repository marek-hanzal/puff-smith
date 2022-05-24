import {IFileSource} from "@/puff-smith/service/file/interface";
import prisma from "@/puff-smith/service/side-effect/prisma";
import {Source} from "@leight-core/server";

export const FileSource = (): IFileSource => {
	const source: IFileSource = Source<IFileSource>({
		name: "file",
		prisma,
		map: async file => ({
			...file,
			created: file.created.toUTCString(),
			updated: file?.updated?.toUTCString() || undefined,
			ttl: file.ttl || undefined,
		}),
		source: {
			get: async id => source.prisma.file.findUnique({
				where: {id},
				rejectOnNotFound: true,
			}),
		}
	});

	return source;
};
