export interface MixtureDto {
	id: string;
	code: string;
	steep: number | null;
	active: boolean;
	pg: number;
	vg: number;
	nicotine: number;
	volume: number;
	mixed: string;
	expires: string | null;
	liquidId: string;
	liquid: import("@/sdk/puff-smith/liquid/dto/index").LiquidDto;
	boosterId: string | null;
	booster: import("@/sdk/puff-smith/booster/dto/index").BoosterDto | null;
	baseId: string | null;
	base: import("@/sdk/puff-smith/base/dto/index").BaseDto | null;
}

export module MixtureDto {

}


export interface CreateDto {
	code: string | null;
	steep: number | null;
	pg: number;
	vg: number;
	nicotine: number;
	volume: number;
	mixed: string;
	expires: string | null;
	liquidId: string;
	boosterId: string | null;
	baseId: string | null;
}

export module CreateDto {

}


export interface MixtureOrderByDto {
	mixed?: boolean | null | undefined;
	active?: boolean | null | undefined;
}

export module MixtureOrderByDto {

}


export interface MixtureFilterDto {
	userId?: string | null | undefined;
	code?: string | null | undefined;
	name?: string | null | undefined;
	vendorIds?: string[] | null | undefined;
	baseIds?: string[] | null | undefined;
	boosterIds?: string[] | null | undefined;
	rating?: number | null | undefined;
	active?: boolean | null | undefined;
	id?: string | undefined;
	fulltext?: string | undefined;
}

export module MixtureFilterDto {

}


export interface PatchDto {
	id: string;
	code?: string | null | undefined;
	active: boolean | null;
	steep?: number | null | undefined;
	pg?: number | null | undefined;
	vg?: number | null | undefined;
	nicotine?: number | null | undefined;
	volume?: number | null | undefined;
	mixed?: string | null | undefined;
	expires?: string | null | undefined;
	liquidId?: string | null | undefined;
	boosterId?: string | null | undefined;
	baseId?: string | null | undefined;
}

export module PatchDto {

}
