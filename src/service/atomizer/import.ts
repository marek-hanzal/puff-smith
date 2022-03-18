import {IImportHandlers} from "@/puff-smith/import";
import {atomizerCreate} from "@/puff-smith/service/atomizer/prisma";

export const AtomizerImport: IImportHandlers = {
	atomizer() {
		return {
			handler: atomizerCreate,
		};
	}
}
