export interface CreateDto {
	name: string;
	email: string;
	password: string;
	site: string;
}

export module CreateDto {

}


export interface PatchDto {
	id: string;
	name: string | null;
	email: string | null;
	password: string | null;
	site: string | null;
}

export module PatchDto {

}


export interface UserOrderByDto {

}

export module UserOrderByDto {

}


export interface UserFilterDto {
	sites?: string[] | undefined;
	email?: string | undefined;
	name?: string | undefined;
	id?: string | undefined;
	fulltext?: string | undefined;
}

export module UserFilterDto {

}
