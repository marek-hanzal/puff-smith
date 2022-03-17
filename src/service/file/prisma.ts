import {IFileQuery} from "@/puff-smith/service/file";
import {toQuery} from "@leight-core/server";
import {fileListMapper} from "@/puff-smith/service/file/mapper";
import prismaClient from "@/puff-smith/service/prisma";

export const fileQuery = async (query: IFileQuery) => toQuery<typeof fileListMapper, IFileQuery>({
	query,
	source: prismaClient.file,
	mapper: fileListMapper,
});

export const fileFetch = async (fileId: string) => prismaClient.file.findFirst({
	where: {
		id: fileId,
	}
})
