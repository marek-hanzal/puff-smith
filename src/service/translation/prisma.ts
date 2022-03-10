import prismaClient from "@/puff-smith/service/prisma";
import {ITranslationCreate} from "@/puff-smith/service/translation";
import {sha256} from "@/puff-smith/service/sha256";

export async function translationCreate(translation: ITranslationCreate) {
	return await prismaClient.translation.create({
		data: {
			...translation,
			hash: sha256(translation.label),
		}
	})
}
