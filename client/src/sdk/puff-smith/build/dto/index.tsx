export interface BuildDto {
	id: string;
	ohm: number | null;
	created: string;
	glow: number | null;
	active: boolean;
	disabledOn?: string | null | undefined;
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


export interface CreateDto {
	created: string | null;
	glow: number | null;
	atomizerId: string;
	coil: import("@/sdk/puff-smith/coil/dto/create/index").CreateDto;
	cottonId: string;
	coils: number;
	coilOffset: number;
	cottonOffset: number;
	ohm: number | null;
	deactivate: boolean | null;
}

export module CreateDto {

}


export interface DeleteDto {
	id: string;
}

export module DeleteDto {

}


export interface PatchDto {
	id: string;
	glow: number | null;
	created?: string | null | undefined;
	atomizerId?: string | null | undefined;
	coilId?: string | null | undefined;
	cottonId?: string | null | undefined;
	coils?: number | null | undefined;
	coilOffset?: number | null | undefined;
	cottonOffset?: number | null | undefined;
	ohm?: number | null | undefined;
}

export module PatchDto {

}
