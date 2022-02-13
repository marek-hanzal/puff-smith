export interface CottonDto {
	id: string;
	name: string;
	description: string | null;
	vendorId: string;
	vendor: import("@/sdk/puff-smith/vendor/dto/index").VendorDto;
}

export module CottonDto {

}


export interface CottonOrderByDto {

}

export module CottonOrderByDto {

}


export interface CottonFilterDto {
	name?: string | null | undefined;
	vendorIds?: string[] | null | undefined;
	id?: string | undefined;
	fulltext?: string | undefined;
}

export module CottonFilterDto {

}


export interface CreateDto {
	name: string;
	description: string | null;
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
	description: string | null;
	vendorId: string;
}

export module PatchDto {

}
