import {ServiceCreate} from "@/puff-smith/service";
import {CodeService} from "@/puff-smith/service/code/CodeService";
import {VendorService} from "@/puff-smith/service/vendor/VendorService";
import {IWireService, IWireServiceCreate} from "@/puff-smith/service/wire/interface";
import {RepositoryService} from "@leight-core/server";

export const WireService = (request: IWireServiceCreate = ServiceCreate()): IWireService => RepositoryService<IWireService>({
	name: "wire",
	source: request.prisma.wire,
	mapper: async wire => ({
		...wire,
	}),
	create: async ({vendor, vendorId, ...create}) => request.prisma.wire.create({
		data: {
			code: create.code || CodeService().code(),
			name: "put-name-here",
			mm: 0,
			vendorId: (await VendorService(request).fetchByReference({vendor, vendorId})).id,
			...create,
		}
	}),
	onUnique: async ({vendor, vendorId, ...create}) => {
		const _wire = (await request.prisma.wire.findFirst({
			where: {
				vendorId: (await VendorService(request).fetchByReference({vendor, vendorId})).id,
			},
			rejectOnNotFound: true,
		}));

		return request.prisma.wire.update({
			where: {
				id: _wire.id,
			},
			data: create,
		});
	},
});
