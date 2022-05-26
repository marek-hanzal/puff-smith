import {IAroma, IWithAroma, IWithAromaTaste} from "@/puff-smith/service/aroma/interface";
import {IBase, IWithNullBaseEntity} from "@/puff-smith/service/base/interface";
import {IBooster, IWithNullBoosterEntity} from "@/puff-smith/service/booster/interface";
import {ITag, ITagEntity} from "@/puff-smith/service/tag/interface";
import {IWithVendor} from "@/puff-smith/service/vendor/interface";
import {IQuery, ISource, IWithFulltext} from "@leight-core/api";
import {Mixture, Prisma} from "@prisma/client";
import {ParsedUrlQuery} from "querystring";

export type IMixtureError = "LESS" | "MORE" | "FULL";

export interface IMixtureCreate {
	code?: string;
	aromaId: string;
	boosterId?: string;
	boosterCount: number;
	baseId?: string;
	baseMl: number;
	content: number;
	volume: number;
	available: number;
	diff: number;
	nicotine: number;
	vg: number;
	pg: number;
	vgToMl: number;
	pgToMl: number;
	error?: IMixtureError;
	draws?: string[];
}

export type IMixtureWhere = Prisma.MixtureWhereInput & IWithFulltext;

export interface IMixtureQuery extends IQuery<IMixtureWhere, Prisma.MixtureOrderByWithRelationInput> {
}

export type IMixtureEntity<T = void> = T extends void ? Mixture : Mixture & T;
export type IWithMixtureEntity<T = void> = { mixture: IMixtureEntity<T>; }
export type IWithMixtureDraw<T = void> = { MixtureDraw: { draw: ITagEntity; }[]; }

export interface IMixture {
	id: string;
	code: string;
	content: number;
	volume: number;
	diff: number;
	nicotine: number;
	vg: number;
	pg: number;
	vgToRound: number;
	pgToRound: number;
	vgToMl: number;
	pgToMl: number;
	aromaId: string;
	aroma: IAroma;
	boosterId?: string | null;
	booster?: IBooster | null;
	boosterCount: number;
	baseId?: string | null;
	base?: IBase | null;
	baseMl: number;
	error?: IMixtureError | null;
	draws: ITag[];
}

export interface IMixtureFetch {
	mixture: IMixture;
}

export interface IMixtureFetchParams extends ParsedUrlQuery {
	mixtureId: string;
}

export interface IMixtureSource extends ISource<IMixtureCreate, IMixtureEntity<IWithAroma<IWithAromaTaste & IWithVendor> & IWithNullBaseEntity & IWithNullBoosterEntity & IWithMixtureDraw>, IMixture, IMixtureQuery, IMixtureFetch, IMixtureFetchParams> {
}
