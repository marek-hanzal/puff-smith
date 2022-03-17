import {IFileFilter, IFileOrderBy, IFileQuery} from "@/puff-smith/service/file";
import {toQuery} from "@leight-core/server";
import {IFile} from "@leight-core/api";
import {fileListMapper} from "@/puff-smith/service/file/mapper";
import {File} from "@prisma/client";
import prismaClient from "@/puff-smith/service/prisma";

export const fileQuery = async (query: IFileQuery) => toQuery<File, IFile, IFileQuery, IFileFilter, IFileOrderBy>({
	query,
	source: prismaClient.file,
	mapper: fileListMapper,
});
