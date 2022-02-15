export interface CreateDto {
	name: string;
	power: number | null;
	vendorId: string;
	cellTypeIds: string[];
}

export module CreateDto {

}


export interface ModDto {
	id: string;
	name: string;
	power: number | null;
	vendorId: string;
	vendor: import("@/sdk/puff-smith/vendor/dto/index").VendorDto;
	cellTypes: import("@/sdk/edde/tag/dto/index").TagDto[];
	cellTypeIds: string[];
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
	vendorIds: string[] | null;
	cellTypeIds: string[] | null;
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
	cellTypeIds: string[];
}

export module PatchDto {

}
