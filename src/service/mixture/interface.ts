import {IAroma} from "@/puff-smith/service/aroma";
import {IBase} from "@/puff-smith/service/base";
import {IBooster} from "@/puff-smith/service/booster";
import {IQuery, IRepositoryService} from "@leight-core/api";
import {Mixture, Prisma} from "@prisma/client";
import {ParsedUrlQuery} from "querystring";

export type IMixtureError = "LESS" | "MORE";

export interface IMixtureCreate {
	aromaId: string;
	boosterId?: string;
	baseId?: string;
	content: number;
	volume: number;
	diff: number;
	nicotine: number;
	vg: number;
	pg: number;
	vgToMl: number;
	pgToMl: number;
	error?: IMixtureError;
}

export interface IMixtureQuery extends IQuery<Prisma.MixtureWhereInput, Prisma.MixtureOrderByWithRelationInput> {
}

export interface IMixture {
	id: string;
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
	baseId?: string | null;
	base?: IBase | null;
	error?: IMixtureError | null;
}

export interface IMixtureFetchProps {
	mixture: IMixture;
}

export interface IMixtureFetchQuery extends ParsedUrlQuery {
	mixtureId: string;
}

export interface IMixtureService extends IRepositoryService<IMixtureCreate, Mixture, IMixture, IMixtureQuery, IMixtureFetchProps, IMixtureFetchQuery> {
}
