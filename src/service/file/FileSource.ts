import {ContainerSource} from "@/puff-smith/service/ContainerSource";
import {IFileEntity, IFileSource} from "@/puff-smith/service/file/interface";
import fileService from "@/puff-smith/service/side-effect/fileService";
import prisma from "@/puff-smith/service/side-effect/prisma";
import {IFileStoreRequest, IQueryFilter, ISourceCreate, ISourceEntity, ISourceItem, ISourceQuery} from "@leight-core/api";
import {pageOf} from "@leight-core/server";
import fs from "node:fs";

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

	async $get(id: string): Promise<ISourceEntity<IFileSource>> {
		return this.prisma.file.findUniqueOrThrow({
			where: {id},
		});
	}

	async $query({orderBy, ...query}: ISourceQuery<IFileSource>): Promise<ISourceEntity<IFileSource>[]> {
		return this.prisma.file.findMany({
			where: this.withFilter(query),
			orderBy,
			...pageOf(query),
		});
	}

	async $count(query: ISourceQuery<IFileSource>): Promise<number> {
		return this.prisma.file.count({
			where: this.withFilter(query),
		});
	}

	withFilter({filter}: ISourceQuery<IFileSource>): IQueryFilter<ISourceQuery<IFileSource>> | undefined {
		return filter;
	}

	async $create(file: ISourceCreate<IFileSource>): Promise<ISourceEntity<IFileSource>> {
		return this.prisma.file.create({
			data: {
				...file,
				userId: this.user.required(),
			},
		});
	}

	async $remove(ids: string[]): Promise<ISourceEntity<IFileSource>[]> {
		const where = {
			id: {
				in: ids,
			},
		};
		const items = await this.prisma.file.findMany({
			where,
		});
		for (const file of items) {
			await fs.unlink(file.location, () => {
			});
		}
		await this.prisma.file.deleteMany({
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
		return this.prisma.file.update({
			where: {id: fileId},
			data: {
				mime: info.mime,
				size: info.size,
			},
		});
	}
}
