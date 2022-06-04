import {ITag, ITagEntity} from "@/puff-smith/service/tag/interface";
import {IQuery, ISource, IWithFulltext} from "@leight-core/api";
import {Mixture, Prisma} from "@prisma/client";
import {ParsedUrlQuery} from "querystring";

export interface IMixtureQuery extends IQuery<Prisma.MixtureWhereInput & IWithFulltext, Prisma.MixtureOrderByWithRelationInput> {
}

export type IMixtureEntity<T = void> = T extends void ? Mixture : Mixture & T;
export type IWithMixture<T = void> = { mixture: IMixtureEntity<T>; }
export type IWithMixtureDraw<T = void> = { MixtureDraw: { draw: ITagEntity; }[]; }

export interface IMixture {
	id: string;
	volume: number;
	nicotineToRound: number;
	nicotine: number;
	vgpg: {
		vg: number;
		pg: number;
	};
	vgpgToRound: {
		vg: number;
		pg: number;
	};
	vg: {
		ratio: number;
		content: number;
		round: number;
	};
	pg: {
		ratio: number;
		content: number;
		round: number;
	};
	aroma: {
		content: number;
		vg: number;
		pg: number;
	};
	base?: {
		content: number;
		vg: number;
		pg: number;
	};
	booster?: {
		content: number;
		count: number;
		vg: number;
		pg: number;
	};
	draws: ITag[];
}

export interface IMixtureFetch {
	mixture: IMixture;
}

export interface IMixtureFetchParams extends ParsedUrlQuery {
	mixtureId: string;
}

export type IMixtureSourceEntity = IMixtureEntity<IWithMixtureDraw>;

export interface IMixtureSource extends ISource<undefined, IMixtureSourceEntity, IMixture, IMixtureQuery, IMixtureFetch, IMixtureFetchParams> {
}
