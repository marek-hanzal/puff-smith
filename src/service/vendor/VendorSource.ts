import {ContainerSource} from "@/puff-smith/service/ContainerSource";
import prisma from "@/puff-smith/service/side-effect/prisma";
import {IVendorEntity, IVendorReference, IVendorSource} from "@/puff-smith/service/vendor/interface";
import {ISourceCreate, ISourceEntity, ISourceItem, ISourceQuery, IWithIdentity, UndefinableOptional} from "@leight-core/api";
import {pageOf} from "@leight-core/server";
import {merge} from "@leight-core/utils";

export const VendorSource = () => new VendorSourceClass();

export class VendorSourceClass extends ContainerSource<IVendorSource> implements IVendorSource {
	constructor() {
		super("vendor", prisma);
	}

	async map(vendor: ISourceEntity<IVendorSource>): Promise<ISourceItem<IVendorSource>> {
		return vendor;
	}

	async $create(create: ISourceCreate<IVendorSource>): Promise<ISourceEntity<IVendorSource>> {
		return this.prisma.vendor.create({
			data: {
				...create,
				userId: this.user.optional(),
			},
		});
	}

	async $patch({id}: UndefinableOptional<ISourceCreate<IVendorSource>> & IWithIdentity): Promise<ISourceEntity<IVendorSource>> {
		return this.prisma.vendor.findFirstOrThrow({
			where: {id},
		});
	}

	async createToId({name}: ISourceCreate<IVendorSource>): Promise<{ id: string }> {
		return this.prisma.vendor.findUniqueOrThrow({
			where: {
				name,
			}
		});
	}

	async $count({filter: {fulltext, ...filter} = {}}: ISourceQuery<IVendorSource>): Promise<number> {
		return this.prisma.vendor.count({
			where: merge(filter, {
				name: {
					contains: fulltext,
					mode: "insensitive",
				},
			}),
		});
	}

	async $query({filter: {fulltext, ...filter} = {}, ...query}: ISourceQuery<IVendorSource>): Promise<ISourceEntity<IVendorSource>[]> {
		return this.prisma.vendor.findMany({
			where: merge(filter, {
				name: {
					contains: fulltext,
					mode: "insensitive",
				},
			}),
			orderBy: [
				{name: "asc"},
			],
			...pageOf(query),
		});
	}

	async $remove(ids: string[]): Promise<ISourceEntity<IVendorSource>[]> {
		const where = {
			id: {
				in: ids,
			},
		};
		const items = await this.prisma.vendor.findMany({
			where,
		});
		await this.prisma.vendor.deleteMany({
			where,
		});
		return items;
	}

	async fetchByReference({vendor, vendorId}: IVendorReference): Promise<IVendorEntity> {
		if (!vendor && !vendorId) {
			throw new Error(`Provide [vendor] or [vendorId].`);
		}
		return this.prisma.vendor.findUniqueOrThrow({
			where: vendorId ? {
				id: vendorId,
			} : {
				name: vendor,
			},
		});
	}

	async fetchByReferenceOptional(request: IVendorReference): Promise<IVendorEntity | undefined> {
		try {
			return await this.fetchByReference(request);
		} catch (e) {
			return undefined;
		}
	}
}
