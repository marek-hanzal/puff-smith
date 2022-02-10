export interface ImageOrderByDto {

}

export module ImageOrderByDto {

}


export interface ImageFilterDto {
	gallery?: string | null | undefined;
	userId?: string | null | undefined;
	id?: string | undefined;
	fulltext?: string | undefined;
}

export module ImageFilterDto {

}


export interface ImageDto {
	id: string;
	preview: import("@/sdk/edde/file/dto/index").FileDto;
	previewId: string;
	original: import("@/sdk/edde/file/dto/index").FileDto;
	originalId: string;
	stamp: string;
	gallery: string | null;
}

export module ImageDto {

}
