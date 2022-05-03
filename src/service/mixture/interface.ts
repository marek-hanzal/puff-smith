import {IServiceCreate} from "@/puff-smith/service";
import {IAroma} from "@/puff-smith/service/aroma/interface";
import {IBase} from "@/puff-smith/service/base/interface";
import {IBooster} from "@/puff-smith/service/booster/interface";
import {IUserOwnershipFilter} from "@/puff-smith/service/user/interface";
import {IQuery, IRepositoryService} from "@leight-core/api";
import {Mixture, Prisma} from "@prisma/client";
import {ParsedUrlQuery} from "querystring";

export type IMixtureError = "LESS" | "MORE" | "FULL";

export interface IMixtureCreate {
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
}

export type IMixtureWhere = Prisma.MixtureWhereInput & IUserOwnershipFilter & { fulltext?: string };

export interface IMixtureQuery extends IQuery<IMixtureWhere, Prisma.MixtureOrderByWithRelationInput> {
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
	boosterCount: number;
	baseId?: string | null;
	base?: IBase | null;
	baseMl: number;
	error?: IMixtureError | null;
}

export interface IMixtureFetchProps {
	mixture: IMixture;
}

export interface IMixtureFetchQuery extends ParsedUrlQuery {
	mixtureId: string;
}

export interface IMixtureServiceCreate extends IServiceCreate {
}

export interface IMixtureService extends IRepositoryService<IMixtureCreate, Mixture, IMixture, IMixtureQuery, IMixtureFetchProps, IMixtureFetchQuery> {
	toCreate(create: IMixtureCreate): any;
}
