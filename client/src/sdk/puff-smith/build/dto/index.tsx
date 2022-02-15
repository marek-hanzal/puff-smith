export interface BuildDto {
	id: string;
	ohm: number | null;
	created: string;
	active: boolean;
	disabledOn?: string | null | undefined;
	atomizerId: string;
	atomizer: import("@/sdk/puff-smith/atomizer/dto/index").AtomizerDto;
	modId?: string | null | undefined;
	mod?: import("@/sdk/puff-smith/mod/dto/index").ModDto | null | undefined;
	driptipId: string | null;
	driptip: import("@/sdk/puff-smith/driptip/dto/index").DriptipDto | null;
	coilId: string;
	coil: import("@/sdk/puff-smith/coil/dto/index").CoilDto;
	coils: number;
	cottonId: string;
	cotton: import("@/sdk/puff-smith/cotton/dto/index").CottonDto;
	draws: import("@/sdk/edde/tag/dto/index").TagDto[];
	drawIds: string[];
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
	coilIds?: string[] | null | undefined;
	modIds?: string[] | null | undefined;
	cottonIds?: string[] | null | undefined;
	wireIds?: string[] | null | undefined;
	drawIds?: string[] | null | undefined;
	id?: string | undefined;
	fulltext?: string | undefined;
}

export module BuildFilterDto {

}


export interface CreateDto {
	created: string | null;
	atomizerId: string;
	modId?: string | null | undefined;
	driptipId: string | null;
	coil: import("@/sdk/puff-smith/coil/dto/index").CreateDto;
	cottonId: string;
	coils: number;
	ohm: number | null;
	deactivate: boolean | null;
	drawIds: string[];
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
	created?: string | null | undefined;
	atomizerId?: string | null | undefined;
	modId?: string | null | undefined;
	driptipId?: string | null | undefined;
	coilId?: string | null | undefined;
	cottonId?: string | null | undefined;
	coils?: number | null | undefined;
	ohm?: number | null | undefined;
	drawIds: string[];
}

export module PatchDto {

}
