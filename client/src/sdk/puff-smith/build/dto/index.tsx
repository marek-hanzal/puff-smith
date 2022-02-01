export interface BuildDto {
	id: string;
	ohm: number;
	created: string;
	glow: number | null;
	rating: number | null;
	active: boolean;
	atomizerId: string;
	atomizer: import("@/sdk/puff-smith/atomizer/dto/index").AtomizerDto;
	coilId: string;
	coil: import("@/sdk/puff-smith/coil/dto/index").CoilDto;
	coilOffset: number;
	coils: number;
	cottonId: string;
	cotton: import("@/sdk/puff-smith/cotton/dto/index").CottonDto;
	cottonOffset: number;
}

export module BuildDto {

}


export interface BuildOrderByDto {

}

export module BuildOrderByDto {

}


export interface BuildFilterDto {
	userId?: string | null | undefined;
	rating?: number | null | undefined;
	active?: boolean | null | undefined;
	atomizerIds?: string[] | null | undefined;
	modIds?: string[] | null | undefined;
	coilIds?: string[] | null | undefined;
	cottonIds?: string[] | null | undefined;
	wireIds?: string[] | null | undefined;
	id?: string | undefined;
	fulltext?: string | undefined;
}

export module BuildFilterDto {

}
