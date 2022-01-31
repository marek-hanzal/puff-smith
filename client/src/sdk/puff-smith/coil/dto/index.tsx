export interface CoilDto {
	id: string;
	wraps: number;
	stamp: string;
	ohm: number;
	size: number;
	wireId: string;
	wire: import("@/sdk/puff-smith/wire/dto/index").WireDto;
}

export module CoilDto {

}


export interface CoilOrderByDto {

}

export module CoilOrderByDto {

}


export interface CoilFilterDto {
	userId?: string | null | undefined;
	wireIds?: any[] | null | undefined;
	wraps?: any[] | null | undefined;
	ohm?: any[] | null | undefined;
	id?: string | undefined;
	fulltext?: string | undefined;
}

export module CoilFilterDto {

}
