import {translationCreate} from "@/puff-smith/service/translation";
import {IImportHandlers} from "@leight-core/api";

export const TranslationImport: IImportHandlers = {
	translation() {
		return {
			handler: translationCreate,
		};
	}
}
