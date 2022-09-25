import {ContainerSource} from "@/puff-smith/service/ContainerSource";
import {IMixtureSource} from "@/puff-smith/service/mixture/interface";
import prisma from "@/puff-smith/service/side-effect/prisma";
import {ISourceEntity, ISourceItem, ISourceQuery} from "@leight-core/api";

export const MixtureSource = () => new MixtureSourceClass();

export class MixtureSourceClass extends ContainerSource<IMixtureSource> implements IMixtureSource {
	constructor() {
		super("mixture", prisma);
	}

	async map(mixture: ISourceEntity<IMixtureSource>): Promise<ISourceItem<IMixtureSource>> {
		return {};
	}

	async $query(query: ISourceQuery<IMixtureSource>): Promise<ISourceEntity<IMixtureSource>[]> {
		return [];
	}

	async $count(query: ISourceQuery<IMixtureSource>): Promise<number> {
		return -1;
	}
}
