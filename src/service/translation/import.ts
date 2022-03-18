import {IImportHandlers} from "@/puff-smith/import";
import {translationCreate} from "@/puff-smith/service/translation";

export const TranslationImport: IImportHandlers = {
	translation() {
		return {
			handler: translationCreate,
		};
	}
}
