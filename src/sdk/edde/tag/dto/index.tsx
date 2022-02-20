export interface TagDto {
	id: string;
	code: string | null;
	label: string;
	group: string | null;
	sort: number;
}

export module TagDto {

}


export interface TagOrderByDto {

}

export module TagOrderByDto {

}


export interface TagFilterDto {
	groups?: string[] | null | undefined;
	id?: string | undefined;
	fulltext?: string | undefined;
}

export module TagFilterDto {

}
