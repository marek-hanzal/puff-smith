export interface CoilOrderByDto {

}

export module CoilOrderByDto {

}


export interface CoilFilterDto {
	id?: string | undefined;
	fulltext?: string | undefined;
}

export module CoilFilterDto {

}


export interface CoilDto {
	id: string;
	wraps: number;
	code: string;
	ohm: number;
	wireId: string;
	wire: import("@/sdk/puff-smith/wire/dto/index").WireDto;
}

export module CoilDto {

}
