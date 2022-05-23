import {ITagRepository} from "@/puff-smith/service/tag/interface";
import {TagSource} from "@/puff-smith/service/tag/TagSource";
import {Repository, uniqueOf} from "@leight-core/server";

export const TagRepository = (): ITagRepository => {
	const source = TagSource();

	return Repository({
		source,
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
};
