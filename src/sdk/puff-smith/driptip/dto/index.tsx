export interface DriptipDto {
	id: string;
	name: string;
	vendorId: string;
	vendor: import("@/sdk/puff-smith/vendor/dto/index").VendorDto;
}

export module DriptipDto {

}


export interface CreateDto {
	name: string;
	vendorId: string;
}

export module CreateDto {

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
