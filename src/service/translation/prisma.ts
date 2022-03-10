import prismaClient from "@/puff-smith/service/prisma";
import {ITranslationCreate} from "@/puff-smith/service/translation";
import {sha256} from "@/puff-smith/service/sha256";
import {PrismaClientKnownRequestError} from "@prisma/client/runtime";

export async function translationCreate(translation: ITranslationCreate) {
	const hash = sha256(translation.label);
	try {
		return await prismaClient.translation.create({
			data: {
				...translation,
				hash,
			}
		})
	} catch (e: any) {
		if ((e as PrismaClientKnownRequestError)?.message?.includes('Unique constraint failed on the fields')) {
			return await prismaClient.translation.update({
				where: {
					language_hash: {
						hash,
						language: translation.language,
					},
				},
				data: translation,
			})
		}
		throw e;
	}
}
