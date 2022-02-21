export interface WireDto {
	id: string;
	name: string;
	description: string | null;
	ga: number | null;
	vendorId: string;
	vendor: import("@/sdk/puff-smith/vendor/dto/index").VendorDto;
	draws: import("@/sdk/edde/tag/dto/index").TagDto[];
	drawIds: string[];
	tc: boolean;
}

export module WireDto {

}


export interface CreateDto {
	name: string;
	description: string | null;
	vendorId: string;
	ga: number | null;
	drawIds: string[];
	tc: boolean;
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
	ga: number | null;
	drawIds: string[];
	tc: boolean;
}

export module PatchDto {

}


export interface WireOrderByDto {

}

export module WireOrderByDto {

}


export interface WireFilterDto {
	name?: string | null | undefined;
	vendorIds?: string[] | null | undefined;
	drawIds?: string[] | null | undefined;
	tc?: boolean | null | undefined;
	id?: string | undefined;
	fulltext?: string | undefined;
}

export module WireFilterDto {

}
