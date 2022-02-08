export interface CommentOrderByDto {
	stamp?: boolean | null | undefined;
}

export module CommentOrderByDto {

}


export interface CommentFilterDto {
	vapeId?: string | null | undefined;
	buildIds?: string[] | null | undefined;
	atomizerIds?: string[] | null | undefined;
	id?: string | undefined;
	fulltext?: string | undefined;
}

export module CommentFilterDto {

}


export interface VapeCommentDto {
	id: string;
	vape: import("@/sdk/puff-smith/vape/dto/index").VapeDto;
	vapeId: string;
	comment: import("@/sdk/puff-smith/comment/dto/index").CommentDto;
	commentId: string;
}

export module VapeCommentDto {

}


export interface CreateDto {
	vapeId: string;
	comment: string;
}

export module CreateDto {

}
