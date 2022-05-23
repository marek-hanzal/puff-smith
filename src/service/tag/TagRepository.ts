import prisma from "@/puff-smith/service/side-effect/prisma";
import {ITag, ITagCreate, ITagQuery, ITagRepository} from "@/puff-smith/service/tag/interface";
import {Source, uniqueOf} from "@leight-core/server";
import {Tag} from "@prisma/client";

export const TagRepository = (): ITagRepository => {
	const source = Source<ITagCreate, Tag, ITag, ITagQuery>({
		name: "tag",
		prisma,
		get source() {
			return source.prisma.tag;
		},
		map: async tag => tag,
		create: async tag => {
			const create = {
				...tag,
				code: `${tag.code}`,
			};
			try {
				return await source.prisma.tag.create({
					data: create,
				});
			} catch (e) {
				return uniqueOf(e, async () => source.prisma.tag.update({
					where: {
						id: (await source.prisma.tag.findFirst({
							where: {
								code: `${create.code}`,
								group: create.group,
							},
							rejectOnNotFound: true,
						})).id,
					},
					data: create,
				}));
			}
		},
	});

	return {
		source,
		fetchCodes: async (codes, group) => source.prisma.tag.findMany({
			where: {
				code: {
					in: codes.split(/,\s*/ig).map(code => `${code}`.toLowerCase()),
				},
				group,
			}
		}),
		fetchByCodes: async (codes, group) => source.prisma.tag.findMany({
			where: {
				code: {
					in: codes.map(code => `${code}`.toLowerCase()),
				},
				group,
			}
		}),
		fetchTag: (group, code, tagId) => {
			if (!code && !tagId) {
				throw new Error(`Provide [code] or [tagId] in group [${group}].`);
			}
			return source.prisma.tag.findUnique({
				where: tagId ? {
					id: tagId,
				} : {
					code_group: {
						group,
						code: code!,
					}
				},
				rejectOnNotFound: true,
			});
		},
	};
};
