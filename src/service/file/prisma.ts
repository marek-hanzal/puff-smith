import {fileListMapper, IFileQuery} from "@/puff-smith/service/file";
import prismaClient from "@/puff-smith/service/prisma";
import {toQuery} from "@leight-core/server";

export const fileQuery = async (query: IFileQuery) => toQuery<typeof fileListMapper, IFileQuery>({
	query,
	source: prismaClient.file,
	mapper: fileListMapper,
});

export const fileFetch = async (fileId: string) => prismaClient.file.findFirst({
	where: {
		id: fileId,
	}
});
