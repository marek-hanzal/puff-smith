import {IServiceCreate} from "@/puff-smith/service";
import {IAroma} from "@/puff-smith/service/aroma/interface";
import {IBase} from "@/puff-smith/service/base/interface";
import {IBooster} from "@/puff-smith/service/booster/interface";
import {ITag} from "@/puff-smith/service/tag/interface";
import {IQuery, IRepository, IWhereFulltext} from "@leight-core/api";
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

export type IMixtureWhere = Prisma.MixtureWhereInput & IWhereFulltext;

export interface IMixtureQuery extends IQuery<IMixtureWhere, Prisma.MixtureOrderByWithRelationInput> {
}

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

export interface IMixtureFetchProps {
	mixture: IMixture;
}

export interface IMixtureFetchQuery extends ParsedUrlQuery {
	mixtureId: string;
}

export interface IMixtureRepositoryCreate extends IServiceCreate {
}

export interface IMixtureRepository extends IRepository<IMixtureCreate, Mixture, IMixture, IMixtureQuery, IMixtureFetchProps, IMixtureFetchQuery> {
}
