import prisma from "@/puff-smith/service/side-effect/prisma";
import {TagSource} from "@/puff-smith/service/tag/TagSource";
import {IWishlistSource} from "@/puff-smith/service/wishlist/interface";
import {pageOf, Source} from "@leight-core/server";
import {merge, singletonOf} from "@leight-core/utils";

export const WishlistSource = (): IWishlistSource => {
	const tagSource = singletonOf(() => TagSource().ofSource(source));

	const source: IWishlistSource = Source<IWishlistSource>({
		name: "wishlist",
		prisma,
		map: async wishlist => wishlist ? {
			...wishlist,
			tags: await tagSource().mapper.list(Promise.resolve(wishlist.WishlistTag.map(({tag}) => tag))),
		} : undefined,
		acl: {
			lock: true,
		},
		source: {
			create: async ({name, url, note, cost, tags = []}) => source.prisma.wishlist.create({
				data: {
					name,
					url,
					note,
					cost,
					userId: source.user.required(),
					created: new Date(),
					WishlistTag: {
						createMany: {
							data: tags.map(tagId => ({
								tagId,
							})),
							skipDuplicates: true,
						}
					}
				},
				include: {
					WishlistTag: {
						include: {
							tag: true,
						}
					}
				},
			}),
			count: async ({filter: {fulltext, ...filter} = {}}) => source.prisma.wishlist.count({
				where: merge(filter, {
					OR: fulltext ? [
						{
							name: {
								contains: fulltext,
								mode: "insensitive",
							},
							url: {
								contains: fulltext,
								mode: "insensitive",
							},
							note: {
								contains: fulltext,
								mode: "insensitive",
							},
						},
					] : undefined,
				}),
			}),
			query: async ({filter: {fulltext, ...filter} = {}, ...query}) => source.prisma.wishlist.findMany({
				where: merge(filter, {
					OR: fulltext ? [
						{
							name: {
								contains: fulltext,
								mode: "insensitive",
							},
							url: {
								contains: fulltext,
								mode: "insensitive",
							},
							note: {
								contains: fulltext,
								mode: "insensitive",
							},
						},
					] : undefined,
				}),
				orderBy: [
					{created: "desc"},
				],
				include: {
					WishlistTag: {
						include: {
							tag: true,
						}
					}
				},
				...pageOf(query),
			}),
			delete: async ids => {
				const where = {
					id: {
						in: ids,
					},
				};
				const items = await prisma.wishlist.findMany({
					where,
					include: {
						WishlistTag: {
							include: {
								tag: true,
							}
						}
					},
				});
				await prisma.wishlist.deleteMany({
					where,
				});
				return items;
			},
		},
	});

	return source;
};
