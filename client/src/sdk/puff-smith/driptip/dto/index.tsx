export interface DriptipDto {
	id: string;
	name: string;
	materials: import("@/sdk/edde/tag/dto/index").TagDto[];
	vendorId: string;
	vendor: import("@/sdk/puff-smith/vendor/dto/index").VendorDto;
}

export module DriptipDto {

}


export interface DriptipOrderByDto {

}

export module DriptipOrderByDto {

}


export interface DriptipFilterDto {
	userId?: string | null | undefined;
	name?: string | null | undefined;
	id?: string | undefined;
	fulltext?: string | undefined;
}

export module DriptipFilterDto {

}
