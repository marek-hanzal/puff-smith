export interface CellDto {
	id: string;
	name: string;
	size: number;
	drain: number;
	voltage: number;
	ohm: number;
	vendorId: string;
	vendor: import("@/sdk/puff-smith/vendor/dto/index").VendorDto;
}

export module CellDto {

}


export interface CellOrderByDto {

}

export module CellOrderByDto {

}


export interface CellFilterDto {
	id?: string | undefined;
	fulltext?: string | undefined;
}

export module CellFilterDto {

}


export interface CreateDto {
	name: string;
	size: number;
	drain: number;
	voltage: number;
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
	size: number;
	drain: number;
	voltage: number;
	vendorId: string;
}

export module PatchDto {

}
