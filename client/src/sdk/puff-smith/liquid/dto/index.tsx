export interface LiquidDto {
	id: string;
	name: string;
	pg: number;
	vg: number;
	volume: number;
	description: string | null;
	vendorId: string;
	vendor: import("@/sdk/puff-smith/vendor/dto/index").VendorDto;
}

export module LiquidDto {

}


export interface LiquidOrderByDto {

}

export module LiquidOrderByDto {

}


export interface LiquidFilterDto {
	name?: string | null | undefined;
	vendorIds?: string[] | null | undefined;
	id?: string | undefined;
	fulltext?: string | undefined;
}

export module LiquidFilterDto {

}
