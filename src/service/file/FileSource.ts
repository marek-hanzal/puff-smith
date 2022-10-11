import {ContainerSource} from "@/puff-smith/service/ContainerSource";
import {
	IFileEntity,
	IFileSource
}                        from "@/puff-smith/service/file/interface";
import fileService       from "@/puff-smith/service/side-effect/fileService";
import prisma            from "@/puff-smith/service/side-effect/prisma";
import {
	IFileStoreRequest,
	QueryInfer,
	SourceInfer,
}                        from "@leight-core/api";
import {pageOf}          from "@leight-core/server";
import fs                from "node:fs";

export const FileSource = () => new FileSourceClass();

export class FileSourceClass extends ContainerSource<IFileSource> implements IFileSource {
	constructor() {
		super("file", prisma);
	}

	async toItem(file: SourceInfer.Entity<IFileSource>): Promise<SourceInfer.Item<IFileSource>> {
		return {
			...file,
			created: file.created.toUTCString(),
			updated: file?.updated?.toUTCString(),
			ttl:     file.ttl || undefined,
		};
	}

	async $get(id: string): Promise<SourceInfer.Entity<IFileSource>> {
		return this.container.prisma.file.findUniqueOrThrow({
			where: {id},
		});
	}

	async $query({orderBy, ...query}: SourceInfer.Query<IFileSource>): Promise<SourceInfer.Entity<IFileSource>[]> {
		return this.container.prisma.file.findMany({
			where: this.withFilter(query),
			orderBy,
			...pageOf(query),
		});
	}

	async $count(query: SourceInfer.Query<IFileSource>): Promise<number> {
		return this.container.prisma.file.count({
			where: this.withFilter(query),
		});
	}

	withFilter({filter}: SourceInfer.Query<IFileSource>): QueryInfer.Filter<SourceInfer.Query<IFileSource>> | undefined {
		return filter;
	}

	async $create(file: SourceInfer.Create<IFileSource>): Promise<SourceInfer.Entity<IFileSource>> {
		return this.container.prisma.file.create({
			data: {
				...file,
				userId: this.container.user.required(),
			},
		});
	}

	async $remove(ids: string[]): Promise<SourceInfer.Entity<IFileSource>[]> {
		const where = {
			id: {
				in: ids,
			},
		};
		const items = await this.container.prisma.file.findMany({
			where,
		});
		for (const file of items) {
			await fs.unlink(file.location, () => {
			});
		}
		await this.container.prisma.file.deleteMany({
			where,
		});
		return items;
	}

	async store(store: IFileStoreRequest): Promise<IFileEntity> {
		return this.create(fileService.store(store));
	}

	async refresh(fileId: string): Promise<IFileEntity> {
		const file = await this.get(fileId);
		const info = fileService.infoOf(file.location);
		return this.container.prisma.file.update({
			where: {id: fileId},
			data:  {
				mime: info.mime,
				size: info.size,
			},
		});
	}
}
