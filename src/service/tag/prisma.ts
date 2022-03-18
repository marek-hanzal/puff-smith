import prismaClient from "@/puff-smith/service/prisma";
import {ITagCreate} from "@/puff-smith/service/tag/interface";

export async function tagCreate(tag: ITagCreate) {
	try {
		return await prismaClient.tag.create({
			data: {
				...tag,
				code: `${tag.code}`,
			},
		})
	} catch (e: any) {
		if ((e as Error)?.message?.includes('Unique constraint failed on the fields')) {
			return await prismaClient.tag.update({
				where: {
					code_group: {
						code: tag.code,
						group: tag.group,
					},
				},
				data: tag,
			})
		}
		throw e;
	}
}
