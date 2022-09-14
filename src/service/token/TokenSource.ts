import {ContainerSource} from "@/puff-smith/service/ContainerSource";
import prisma from "@/puff-smith/service/side-effect/prisma";
import {IToken, ITokenEntity, ITokenSource} from "@/puff-smith/service/token/interface";
import {ISourceCreate, ISourceEntity, ISourceItem, ISourceQuery, IWithIdentity, UndefinableOptional} from "@leight-core/api";
import {pageOf} from "@leight-core/server";

export const TokenSource = () => new TokenSourceClass();

export class TokenSourceClass extends ContainerSource<ITokenSource> implements ITokenSource {
	constructor() {
		super("token", prisma);
	}

	async map(token: ISourceEntity<ITokenSource>): Promise<ISourceItem<ITokenSource>> {
		return token;
	}

	async $count({filter: {fulltext, ...filter} = {}}: ISourceQuery<ITokenSource>): Promise<number> {
		return this.prisma.token.count({
			where: {
				name: {
					contains: fulltext,
					mode: "insensitive",
				},
			},
		});
	}

	async $query({filter: {fulltext, ...filter} = {}, orderBy, ...query}: ISourceQuery<ITokenSource>): Promise<ISourceEntity<ITokenSource>[]> {
		return this.prisma.token.findMany({
			where: {
				name: {
					contains: fulltext,
					mode: "insensitive",
				},
			},
			orderBy,
			...pageOf(query),
		});
	}

	async $create({name}: ISourceCreate<ITokenSource>): Promise<ISourceEntity<ITokenSource>> {
		return this.prisma.token.create({
			data: {
				name,
			},
		});
	}

	async createToId({name}: ISourceCreate<ITokenSource>): Promise<{ id: string }> {
		return this.prisma.token.findFirstOrThrow({
			where: {
				name,
			},
		});
	}

	async $patch({id}: UndefinableOptional<ISourceCreate<ITokenSource>> & IWithIdentity): Promise<ISourceEntity<ITokenSource>> {
		return this.prisma.token.findFirstOrThrow({
			where: {id},
		});
	}

	async fetchByNames(tokens: string[] | string): Promise<ITokenEntity[]> {
		const $names = Array.isArray(tokens) ? tokens : tokens.split(/,\s*/ig).map(tokens => `${tokens}`.toLowerCase());
		return this.prisma.token.findMany({
			where: {
				OR: [
					{name: {in: $names}},
					{id: {in: $names}},
				],
			}
		});
	}

	async tokensOf(userId: string): Promise<IToken[]> {
		return this.list(this.prisma.token.findMany({
			where: {
				UserToken: {
					every: {
						userId,
					}
				}
			}
		}));
	}
}
