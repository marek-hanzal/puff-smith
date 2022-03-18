import {Atomizer} from '@prisma/client';
import {IAtomizer, IAtomizers} from "@/puff-smith/service/atomizer/interface";
import {vendorMapper, vendorRequire} from "@/puff-smith/service/vendor";

export const atomizerListMapper = async (atomizers: IAtomizers) => await Promise.all((await atomizers).map(atomizerMapper));

export const atomizerMapper = async (atomizer: Atomizer): Promise<IAtomizer> => {
	const vendor = await vendorRequire(atomizer.vendorId);
	return {
		...atomizer,
		vendor: vendorMapper(vendor),
	};
}
