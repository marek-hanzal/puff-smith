import {ContainerSource} from "@/puff-smith/service/ContainerSource";
import {IFileSource} from "@/puff-smith/service/file/interface";
import prisma from "@/puff-smith/service/side-effect/prisma";
import {ISourceEntity, ISourceItem} from "@leight-core/api";

export const FileSource = () => new FileSourceClass();

export class FileSourceClass extends ContainerSource<IFileSource> implements IFileSource {
	constructor() {
		super("file", prisma);
	}

	async map(file: ISourceEntity<IFileSource>): Promise<ISourceItem<IFileSource>> {
		return {
			...file,
			created: file.created.toUTCString(),
			updated: file?.updated?.toUTCString(),
			ttl: file.ttl || undefined,
		};
	}

	$get(id: string): Promise<ISourceEntity<IFileSource>> {
		return this.prisma.file.findUniqueOrThrow({
			where: {id},
		});
	}
}
