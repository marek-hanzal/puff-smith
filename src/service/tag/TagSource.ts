import prisma from "@/puff-smith/service/side-effect/prisma";
import {ITagSource} from "@/puff-smith/service/tag/interface";
import {Source} from "@leight-core/server";

export const TagSource = (): ITagSource => {
	const source: ITagSource = Source<ITagSource>({
		name: "tag",
		prisma,
		map: async tag => tag,
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
	});

	return source;
};
