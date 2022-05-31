import {IAtomizer, IWithAtomizer, IWithAtomizerDraw} from "@/puff-smith/service/atomizer/interface";
import {ICoil, IWithCoil, IWithCoilDraw} from "@/puff-smith/service/coil/interface";
import {ICotton, IWithCotton, IWithCottonDraw} from "@/puff-smith/service/cotton/interface";
import {IWithFiber, IWithFiberMaterial} from "@/puff-smith/service/fiber/interface";
import {IWithVendor} from "@/puff-smith/service/vendor/interface";
import {IWithWire, IWithWireDraw, IWithWireFiber} from "@/puff-smith/service/wire/interface";
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
}

export interface IBuild {
	id: string;
	code: string;
	ohm: number;
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

export interface IBuildFetch {
	build: IBuild;
}

export interface IBuildFetchParams extends ParsedUrlQuery {
	buildId: string;
}

export type IBuildSourceEntity = IBuildEntity<IWithAtomizer<IWithVendor & IWithAtomizerDraw> & IWithCoil<IWithCoilDraw & IWithWire<IWithVendor & IWithWireDraw & IWithWireFiber<IWithFiber<IWithFiberMaterial>>>> & IWithCotton<IWithVendor & IWithCottonDraw>>;

export interface IBuildSource extends ISource<IBuildCreate, IBuildSourceEntity, IBuild, IBuildQuery, IBuildFetch, IBuildFetchParams> {
}
