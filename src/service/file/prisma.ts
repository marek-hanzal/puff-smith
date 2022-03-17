import {IFileFilter, IFileOrderBy, IFileQuery} from "@/puff-smith/service/file";
import {toQuery} from "@leight-core/server";
import {IFile} from "@leight-core/api";
import prismaClient from "@/puff-smith/service/prisma";
import {fileListMapper} from "@/puff-smith/service/file/mapper";
import {File} from "@prisma/client";

export const fileQuery = async (query: IFileQuery) => toQuery<File, IFile, IFileQuery, IFileFilter, IFileOrderBy>(
	query,
	fileListMapper,
	prismaClient.file,
);
