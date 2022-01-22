export interface BoosterOrderByDto {

}

export module BoosterOrderByDto {

}


export interface BoosterFilterDto {
	id?: string | undefined;
	fulltext?: string | undefined;
}

export module BoosterFilterDto {

}


export interface BoosterDto {
	id: string;
	name: string;
	nicotine: number;
	volume: number;
	vendorId: string;
	vendor: import("@/sdk/puff-smith/vendor/dto/index").VendorDto;
}

export module BoosterDto {

}
