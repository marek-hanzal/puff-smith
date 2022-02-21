export interface CommentOrderByDto {
	stamp?: boolean | null | undefined;
}

export module CommentOrderByDto {

}


export interface CommentFilterDto {
	userId?: string | null | undefined;
	buildId?: string | null | undefined;
	atomizerIds?: string[] | null | undefined;
	id?: string | undefined;
	fulltext?: string | undefined;
}

export module CommentFilterDto {

}


export interface BuildCommentDto {
	id: string;
	build: import("@/sdk/puff-smith/build/dto/index").BuildDto;
	buildId: string;
	comment: import("@/sdk/puff-smith/comment/dto/index").CommentDto;
	commentId: string;
}

export module BuildCommentDto {

}


export interface CreateDto {
	buildId: string;
	comment: string;
}

export module CreateDto {

}
