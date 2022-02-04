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
