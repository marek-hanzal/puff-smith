export interface CommentDto {
	id: string;
	stamp: string;
	comment: string;
}

export module CommentDto {

}


export interface CommentOrderByDto {
	stamp?: boolean | null | undefined;
}

export module CommentOrderByDto {

}


export interface CommentFilterDto {
	userId?: string | null | undefined;
	id?: string | undefined;
	fulltext?: string | undefined;
}

export module CommentFilterDto {

}
