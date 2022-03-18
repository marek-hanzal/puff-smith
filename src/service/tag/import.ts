import {IImportHandlers} from "@/puff-smith/import";
import {tagCreate} from "@/puff-smith/service/tag/prisma";

export const TagImport: IImportHandlers = {
	tag() {
		return {
			handler: tagCreate,
		};
	}
}
