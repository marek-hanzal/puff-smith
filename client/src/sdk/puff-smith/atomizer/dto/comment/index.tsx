export interface CommentOrderByDto {
	stamp?: boolean | null | undefined;
}

export module CommentOrderByDto {

}


export interface CommentFilterDto {
	atomizerId?: string | null | undefined;
	id?: string | undefined;
	fulltext?: string | undefined;
}

export module CommentFilterDto {

}


export interface AtomizerCommentDto {
	id: string;
	atomizer: import("@/sdk/puff-smith/atomizer/dto/index").AtomizerDto;
	atomizerId: string;
	comment: import("@/sdk/puff-smith/comment/dto/index").CommentDto;
	commentId: string;
}

export module AtomizerCommentDto {

}


export interface CreateDto {
	atomizerId: string;
	comment: string;
}

export module CreateDto {

}
