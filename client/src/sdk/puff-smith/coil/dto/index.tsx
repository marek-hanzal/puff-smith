export interface CoilDto {
	id: string;
	wraps: number;
	stamp: string;
	size: number;
	spaced: boolean;
	wireId: string;
	wire: import("@/sdk/puff-smith/wire/dto/index").WireDto;
	ohm: number | null;
}

export module CoilDto {

}


export interface CreateDto {
	wraps: number;
	size: number;
	wireId: string;
	spaced: boolean;
}

export module CreateDto {

}


export interface CoilOrderByDto {

}

export module CoilOrderByDto {

}


export interface CoilFilterDto {
	wireIds?: any[] | null | undefined;
	wraps?: any[] | null | undefined;
	id?: string | undefined;
	fulltext?: string | undefined;
}

export module CoilFilterDto {

}


export interface DeleteDto {
	id: string;
}

export module DeleteDto {

}


export interface PatchDto {
	id: string;
	wraps?: number | null | undefined;
	size?: number | null | undefined;
	wireId?: string | null | undefined;
	spaced: boolean;
}

export module PatchDto {

}
