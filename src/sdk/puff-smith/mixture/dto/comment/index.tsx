export interface CommentOrderByDto {
	stamp?: boolean | null | undefined;
}

export module CommentOrderByDto {

}


export interface CommentFilterDto {
	userId?: string | null | undefined;
	mixtureId?: string | null | undefined;
	liquidId?: string | null | undefined;
	id?: string | undefined;
	fulltext?: string | undefined;
}

export module CommentFilterDto {

}


export interface MixtureCommentDto {
	id: string;
	mixture: import("@/sdk/puff-smith/mixture/dto/index").MixtureDto;
	mixtureId: string;
	comment: import("@/sdk/puff-smith/comment/dto/index").CommentDto;
	commentId: string;
}

export module MixtureCommentDto {

}


export interface CreateDto {
	mixtureId: string;
	comment: string;
}

export module CreateDto {

}
