export interface BaseOrderByDto {

}

export module BaseOrderByDto {

}


export interface BaseFilterDto {
	id?: string | undefined;
	fulltext?: string | undefined;
}

export module BaseFilterDto {

}


export interface BaseDto {
	id: string;
	name: string;
	pg: number;
	vg: number;
	vendorId: string;
	vendor: import("@/sdk/puff-smith/vendor/dto/index").VendorDto;
}

export module BaseDto {

}
