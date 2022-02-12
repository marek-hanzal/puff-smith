export interface CreateDto {
	name: string;
	power: number | null;
	vendorId: string;
}

export module CreateDto {

}


export interface ModDto {
	id: string;
	name: string;
	power: number | null;
	vendorId: string;
	vendor: import("@/sdk/puff-smith/vendor/dto/index").VendorDto;
}

export module ModDto {

}


export interface DeleteDto {
	id: string;
}

export module DeleteDto {

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


export interface PatchDto {
	id: string;
	name: string;
	power: number | null;
	vendorId: string;
}

export module PatchDto {

}
