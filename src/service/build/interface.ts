import {IAtomizer, IWithAtomizerSourceEntity} from "@/puff-smith/service/atomizer/interface";
import {ICoil, IWithCoilSourceEntity} from "@/puff-smith/service/coil/interface";
import {ICotton, IWithCottonSourceEntity} from "@/puff-smith/service/cotton/interface";
import {IQuery, ISource, IWithFulltext} from "@leight-core/api";
import {Build, Prisma} from "@prisma/client";
import {ParsedUrlQuery} from "querystring";

export interface IBuildCreate {
	atomizerId: string;
	cottonId: string;
	coilId: string;
	code?: string;
	ohm: number;
	created?: Date;
	archive: boolean;
	active?: boolean;
}

export interface IBuild {
	id: string;
	code: string;
	ohm: number;
	drain?: number | null;
	watts?: number | null;
	rating?: number | null;
	coil: ICoil;
	coilId: string;
	atomizer: IAtomizer;
	atomizerId: string;
	cotton: ICotton;
	cottonId: string;
	created: string;
	active: boolean;
}

export interface IBuildQuery extends IQuery<Prisma.BuildWhereInput & IWithFulltext, Prisma.BuildOrderByWithRelationInput> {
}

export type IBuildEntity<T = void> = T extends void ? Build : Build & T;
export type IWithBuild<T = void> = { build: IBuildEntity<T>; };

export interface IBuildFetch {
	build: IBuild;
}

export interface IBuildFetchParams extends ParsedUrlQuery {
	buildId: string;
}

export type IBuildSourceEntity = IBuildEntity<IWithAtomizerSourceEntity & IWithCoilSourceEntity & IWithCottonSourceEntity>;

export interface IBuildSource extends ISource<IBuildCreate, IBuildSourceEntity, IBuild, IBuildQuery, IBuildFetch, IBuildFetchParams> {
}
