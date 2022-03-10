import {IImportHandlers} from "@/puff-smith/import";
import {ITranslationCreate, translationCreate} from "@/puff-smith/service/translation";

export const TranslationImport: IImportHandlers = {
	translation() {
		return {
			async handler(item: ITranslationCreate) {
				await translationCreate(item);
			},
		};
	}
}
