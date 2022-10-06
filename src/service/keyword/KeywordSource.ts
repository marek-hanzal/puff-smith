import {ContainerSource} from "@/puff-smith/service/ContainerSource";
import {IKeywordSource}  from "@/puff-smith/service/keyword/interface";
import prisma            from "@/puff-smith/service/side-effect/prisma";
import {
	IWithIdentity,
	SourceInfer,
	UndefinableOptional
}                        from "@leight-core/api";

export const KeywordSource = () => new KeywordSourceClass();

export class KeywordSourceClass extends ContainerSource<IKeywordSource> implements IKeywordSource {
	constructor() {
		super("keyword", prisma);
	}

	async map(keyword: SourceInfer.Entity<IKeywordSource>): Promise<SourceInfer.Item<IKeywordSource>> {
		return keyword;
	}

	async $create({text}: SourceInfer.Create<IKeywordSource>): Promise<SourceInfer.Entity<IKeywordSource>> {
		return this.prisma.keyword.create({
			data: {
				text: `${text}`,
			}
		});
	}

	async $patch({id}: UndefinableOptional<SourceInfer.Create<IKeywordSource>> & IWithIdentity): Promise<SourceInfer.Entity<IKeywordSource>> {
		return this.prisma.keyword.findUniqueOrThrow({
			where: {id},
		});
	}

	async createToId({text}: SourceInfer.Create<IKeywordSource>): Promise<{ id: string }> {
		return this.prisma.keyword.findUniqueOrThrow({
			where: {text: `${text}`},
		});
	}
}
