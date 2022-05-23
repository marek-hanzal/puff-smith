import prisma from "@/puff-smith/service/side-effect/prisma";
import {ITag, ITagQuery, ITagSource} from "@/puff-smith/service/tag/interface";
import {Source} from "@leight-core/server";
import {Tag} from "@prisma/client";

export const TagSource = (): ITagSource => {
	const source: ITagSource = Source<Tag, ITag, ITagQuery>({
		name: "tag",
		prisma,
		get source() {
			return source.prisma.tag;
		},
		map: async tag => tag,
	});

	return source;
};
