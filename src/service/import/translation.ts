import {IImportHandlers} from "@/puff-smith/import";
import prismaClient from "@/puff-smith/service/prisma";
import {sha256} from "@/puff-smith/service/sha256";

export interface IImportTranslation {
	language: string;
	label: string;
	text: string;
}

export const TranslationImport: IImportHandlers = {
	translation() {
		return {
			async begin() {
			},
			async end() {
			},
			async handler(item: IImportTranslation) {
				await prismaClient.translation.create({
					data: {
						...item,
						hash: sha256(item.label),
					}
				});
			},
		};
	}
}
