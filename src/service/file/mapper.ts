import {IFiles} from "@/puff-smith/service/file";
import {IFile} from "@leight-core/api";
import {File} from "@prisma/client";

export const fileListMapper = async (files: IFiles) => (await files).map(fileMapper);

export const fileMapper = (file: File): IFile => {
	return {
		...file,
		created: file.created.toUTCString(),
		updated: file?.updated?.toUTCString() || undefined,
		ttl: file.ttl || undefined,
	};
};
