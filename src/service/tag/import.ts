import {tagCreate} from "@/puff-smith/service/tag/prisma";
import {IImportHandlers} from "@leight-core/api";

export const TagImport: IImportHandlers = {
	tag() {
		return {
			handler: tagCreate,
		};
	}
}
