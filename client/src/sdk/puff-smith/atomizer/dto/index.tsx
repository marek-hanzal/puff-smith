export interface AtomizerDto {
	id: string;
	name: string;
	vendorId: string;
	vendor: import("@/sdk/puff-smith/vendor/dto/index").VendorDto;
}

export module AtomizerDto {

}


export interface AtomizerOrderByDto {

}

export module AtomizerOrderByDto {

}


export interface AtomizerFilterDto {
	name?: string | null | undefined;
	vendorIds?: string[] | null | undefined;
	id?: string | undefined;
	fulltext?: string | undefined;
}

export module AtomizerFilterDto {

}


export interface CreateDto {
	name: string;
	vendorId: string;
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
	name: string;
	vendorId: string;
}

export module PatchDto {

}
