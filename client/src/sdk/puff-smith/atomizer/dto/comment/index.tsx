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


export interface CreateDto {
	atomizerId: string;
	comment: string;
}

export module CreateDto {

}