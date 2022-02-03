export interface CommentOrderByDto {
	stamp?: boolean | null | undefined;
}

export module CommentOrderByDto {

}


export interface CommentFilterDto {
	vapeId?: string | null | undefined;
	buildIds?: string[] | null | undefined;
	id?: string | undefined;
	fulltext?: string | undefined;
}

export module CommentFilterDto {

}


export interface CreateDto {
	vapeId: string;
	comment: string;
}

export module CreateDto {

}
