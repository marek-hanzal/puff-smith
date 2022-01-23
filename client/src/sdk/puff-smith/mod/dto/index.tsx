export interface ModDto {
	id: string;
	name: string;
	power: number | null;
	vendorId: string;
	vendor: import("@/sdk/puff-smith/vendor/dto/index").VendorDto;
}

export module ModDto {

}


export interface ModOrderByDto {

}

export module ModOrderByDto {

}


export interface ModFilterDto {
	name?: string | null | undefined;
	id?: string | undefined;
	fulltext?: string | undefined;
}

export module ModFilterDto {

}
