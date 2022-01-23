export interface MixtureDto {
	id: string;
	name: string;
	code: string;
	steep: number;
	pg: number;
	vg: number;
	nicotine: number;
	volume: number;
	mixed: number;
	expires: number | null;
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

}

export module MixtureOrderByDto {

}


export interface MixtureFilterDto {
	id?: string | undefined;
	fulltext?: string | undefined;
}

export module MixtureFilterDto {

}