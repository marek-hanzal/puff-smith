import {ContainerSource} from "@/puff-smith/service/ContainerSource";
import {IKeywordSource}  from "@/puff-smith/service/keyword/interface";
import {
	IWithIdentity,
	SourceInfer,
	UndefinableOptional
}                        from "@leight-core/api";

export class KeywordSourceClass extends ContainerSource<IKeywordSource> implements IKeywordSource {
	constructor() {
		super("keyword");
	}

	async toItem(keyword: SourceInfer.Entity<IKeywordSource>): Promise<SourceInfer.Item<IKeywordSource>> {
		return keyword;
	}

	async $create({text}: SourceInfer.Create<IKeywordSource>): Promise<SourceInfer.Entity<IKeywordSource>> {
		return this.container.prisma.keyword.create({
			data: {
				text: `${text}`,
			}
		});
	}

	async $patch({id}: UndefinableOptional<SourceInfer.Create<IKeywordSource>> & IWithIdentity): Promise<SourceInfer.Entity<IKeywordSource>> {
		return this.container.prisma.keyword.findUniqueOrThrow({
			where: {id},
		});
	}

	async resolveId({text}: SourceInfer.Create<IKeywordSource>): Promise<IWithIdentity> {
		return this.container.prisma.keyword.findUniqueOrThrow({
			where: {text: `${text}`},
		});
	}
}

export const KeywordSource = () => new KeywordSourceClass();
