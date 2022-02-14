export interface CreateDto {
	atomizerId: string;
	driptipId: string | null;
}

export module CreateDto {

}


export interface UserAtomizerDto {
	id: string;
	atomizerId: string;
	atomizer: import("@/sdk/puff-smith/atomizer/dto/index").AtomizerDto;
	driptipId: string | null;
	driptip: import("@/sdk/puff-smith/driptip/dto/index").DriptipDto | null;
	stamp: string;
}

export module UserAtomizerDto {

}


export interface DeleteDto {
	id: string;
}

export module DeleteDto {

}


export interface PatchDto {
	id: string;
	driptipId: string | null;
}

export module PatchDto {

}


export interface UserAtomizerOrderByDto {

}

export module UserAtomizerOrderByDto {

}


export interface UserAtomizerFilterDto {
	userId?: string | null | undefined;
	id?: string | undefined;
	fulltext?: string | undefined;
}

export module UserAtomizerFilterDto {

}
