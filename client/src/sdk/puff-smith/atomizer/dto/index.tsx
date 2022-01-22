export interface AtomizerOrderByDto {

}

export module AtomizerOrderByDto {

}


export interface AtomizerFilterDto {
	name?: string | null | undefined;
	id?: string | undefined;
	fulltext?: string | undefined;
}

export module AtomizerFilterDto {

}


export interface AtomizerDto {
	id: string;
	name: string;
	vendorId: string;
	vendor: import("@/sdk/puff-smith/vendor/dto/index").VendorDto;
}

export module AtomizerDto {

}
