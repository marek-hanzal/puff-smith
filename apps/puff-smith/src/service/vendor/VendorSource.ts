import {ContainerSource} from "@/puff-smith/service/ContainerSource";
import {
	IVendorEntity,
	IVendorReference,
	IVendorSource
}                        from "@/puff-smith/service/vendor/interface";
import {
	IWithIdentity,
	merge,
	pageOf,
	QueryInfer,
	SourceInfer,
	UndefinableOptional
}                        from "@leight-core/viv";

export class VendorSourceClass extends ContainerSource<IVendorSource> implements IVendorSource {
	constructor() {
		super("vendor");
	}

	async toItem(vendor: SourceInfer.Entity<IVendorSource>): Promise<SourceInfer.Item<IVendorSource>> {
		return vendor;
	}

	async $get(id: string): Promise<SourceInfer.Entity<IVendorSource>> {
		return this.container.prisma.vendor.findUniqueOrThrow({
			where: {id},
		});
	}

	async $create(create: SourceInfer.Create<IVendorSource>): Promise<SourceInfer.Entity<IVendorSource>> {
		return this.container.prisma.vendor.create({
			data: {
				...create,
				userId: this.container.user.optional(),
			},
		});
	}

	async $patch({id}: UndefinableOptional<SourceInfer.Create<IVendorSource>> & IWithIdentity): Promise<SourceInfer.Entity<IVendorSource>> {
		return this.container.prisma.vendor.findFirstOrThrow({
			where: {id},
		});
	}

	async resolveId({name}: SourceInfer.Create<IVendorSource>): Promise<IWithIdentity> {
		return this.container.prisma.vendor.findUniqueOrThrow({
			where: {
				name,
			}
		});
	}

	async $count(query: SourceInfer.Query<IVendorSource>): Promise<number> {
		return this.container.prisma.vendor.count({
			where: this.withFilter(query),
		});
	}

	async $query(query: SourceInfer.Query<IVendorSource>): Promise<SourceInfer.Entity<IVendorSource>[]> {
		return this.container.prisma.vendor.findMany({
			where:   this.withFilter(query),
			orderBy: [
				{name: "asc"},
			],
			...pageOf(query),
		});
	}

	withFilter({filter: {fulltext, id, ...filter} = {}}: SourceInfer.Query<IVendorSource>): QueryInfer.Filter<SourceInfer.Query<IVendorSource>> | undefined {
		return merge(filter, {
			id:   Array.isArray(id) ? {
				in: id,
			} : id,
			name: {
				contains: fulltext,
				mode:     "insensitive",
			},
		});
	}

	async $remove(ids: string[]): Promise<SourceInfer.Entity<IVendorSource>[]> {
		const where = {
			id: {
				in: ids,
			},
		};
		const items = await this.container.prisma.vendor.findMany({
			where,
		});
		await this.container.prisma.vendor.deleteMany({
			where,
		});
		return items;
	}

	async fetchByReference({vendor, vendorId}: IVendorReference): Promise<IVendorEntity> {
		if (!vendor && !vendorId) {
			throw new Error(`Provide [vendor] or [vendorId].`);
		}
		return this.container.prisma.vendor.findUniqueOrThrow({
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

export const VendorSource = () => new VendorSourceClass();
