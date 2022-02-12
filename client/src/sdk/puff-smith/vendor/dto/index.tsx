export interface VendorDto {
	id: string;
	name: string;
}

export module VendorDto {

}


export interface CreateDto {
	name: string;
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
}

export module PatchDto {

}


export interface VendorOrderByDto {

}

export module VendorOrderByDto {

}


export interface VendorFilterDto {
	id?: string | undefined;
	fulltext?: string | undefined;
}

export module VendorFilterDto {

}
