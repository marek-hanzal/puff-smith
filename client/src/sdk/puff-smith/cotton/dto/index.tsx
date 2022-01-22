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
	id?: string | undefined;
	fulltext?: string | undefined;
}

export module CottonFilterDto {

}
