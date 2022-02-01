export interface CommentOrderByDto {
	stamp?: boolean | null | undefined;
}

export module CommentOrderByDto {

}


export interface CommentFilterDto {
	mixtureId?: string | null | undefined;
	id?: string | undefined;
	fulltext?: string | undefined;
}

export module CommentFilterDto {

}


export interface CreateDto {
	mixtureId: string;
	comment: string;
}

export module CreateDto {

}
