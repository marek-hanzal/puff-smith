export interface DriptipDto {
	id: string;
	code: string;
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
	id?: string | undefined;
	fulltext?: string | undefined;
}

export module DriptipFilterDto {

}
