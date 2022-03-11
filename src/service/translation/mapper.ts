import {ITranslation} from "@leight-core/api";
import prismaClient from "@/puff-smith/service/prisma";
import {Translation} from "@prisma/client";

export const translationListMapper = async (translations: ReturnType<typeof prismaClient.translation.findMany>): Promise<ITranslation[]> => {
	return (await translations).map(translationMapper);
}

export const translationMapper = (translation: Translation): ITranslation => {
	return {
		key: translation.label,
		value: translation.text,
	};
}
