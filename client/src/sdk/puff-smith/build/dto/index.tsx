export interface BuildDto {
	id: string;
	name: string;
	description: string | null;
	ohm: number;
	created: number;
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
	id?: string | undefined;
	fulltext?: string | undefined;
}

export module BuildFilterDto {

}
