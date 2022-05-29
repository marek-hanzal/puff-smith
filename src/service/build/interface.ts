import {IQuery, ISource, IWithFulltext} from "@leight-core/api";
import {Build, Prisma} from "@prisma/client";
import {ParsedUrlQuery} from "querystring";

export interface IBuildCreate {
	code?: string;
	created?: Date;
}

export interface IBuild {
	id: string;
	code: string;
}

export interface IBuildQuery extends IQuery<Prisma.BuildWhereInput & IWithFulltext, Prisma.BuildOrderByWithRelationInput> {
}

export type IBuildEntity<T = void> = T extends void ? Build : Build & T;

export interface IBuildFetch {
	build: IBuild;
}

export interface IBuildFetchParams extends ParsedUrlQuery {
	buildId: string;
}

export interface IBuildSource extends ISource<IBuildCreate, IBuildEntity, IBuild, IBuildQuery, IBuildFetch, IBuildFetchParams> {
}
