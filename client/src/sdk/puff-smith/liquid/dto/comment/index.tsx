export interface CommentOrderByDto {
	stamp?: boolean | null | undefined;
}

export module CommentOrderByDto {

}


export interface CommentFilterDto {
	liquidId?: string | null | undefined;
	id?: string | undefined;
	fulltext?: string | undefined;
}

export module CommentFilterDto {

}


export interface LiquidCommentDto {
	id: string;
	liquid: import("@/sdk/puff-smith/liquid/dto/index").LiquidDto;
	liquidId: string;
	comment: import("@/sdk/puff-smith/comment/dto/index").CommentDto;
	commentId: string;
}

export module LiquidCommentDto {

}


export interface CreateDto {
	liquidId: string;
	comment: string;
}

export module CreateDto {

}
