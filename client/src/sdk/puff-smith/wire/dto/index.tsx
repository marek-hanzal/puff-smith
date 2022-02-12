export interface WireDto {
	id: any | null;
	name: any | null;
	description: any | null;
	ga: any | null;
	vendorId: any | null;
	vendor: any | null;
}

export module WireDto {

}


export interface CreateDto {
	name: string;
	description: string | null;
	vendorId: string;
	ga: number | null;
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
}

export module PatchDto {

}


export interface WireOrderByDto {

}

export module WireOrderByDto {

}


export interface WireFilterDto {
	id?: string | undefined;
	fulltext?: string | undefined;
}

export module WireFilterDto {

}
