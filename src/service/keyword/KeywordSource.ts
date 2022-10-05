import {ContainerSource} from "@/puff-smith/service/ContainerSource";
import {IKeywordSource}  from "@/puff-smith/service/keyword/interface";
import prisma            from "@/puff-smith/service/side-effect/prisma";
import {
	ISourceCreate,
	ISourceEntity,
	ISourceItem,
	IWithIdentity,
	UndefinableOptional
}                        from "@leight-core/api";

export const KeywordSource = () => new KeywordSourceClass();

export class KeywordSourceClass extends ContainerSource<IKeywordSource> implements IKeywordSource {
	constructor() {
		super("keyword", prisma);
	}

	async map(keyword: ISourceEntity<IKeywordSource>): Promise<ISourceItem<IKeywordSource>> {
		return keyword;
	}

	async $create({text}: ISourceCreate<IKeywordSource>): Promise<ISourceEntity<IKeywordSource>> {
		return this.prisma.keyword.create({
			data: {
				text: `${text}`,
			}
		});
	}

	async $patch({id}: UndefinableOptional<ISourceCreate<IKeywordSource>> & IWithIdentity): Promise<ISourceEntity<IKeywordSource>> {
		return this.prisma.keyword.findUniqueOrThrow({
			where: {id},
		});
	}

	async createToId({text}: ISourceCreate<IKeywordSource>): Promise<{ id: string }> {
		return this.prisma.keyword.findUniqueOrThrow({
			where: {text: `${text}`},
		});
	}
}
