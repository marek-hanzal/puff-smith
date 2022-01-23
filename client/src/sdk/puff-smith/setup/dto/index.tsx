export interface SetupDto {
	id: string;
	name: string;
	description: string | null;
	buildId: string;
	build: import("@/sdk/puff-smith/build/dto/index").BuildDto;
	modId: string;
	mod: import("@/sdk/puff-smith/mod/dto/index").ModDto;
	created: string;
}

export module SetupDto {

}


export interface SetupOrderByDto {

}

export module SetupOrderByDto {

}


export interface SetupFilterDto {
	id?: string | undefined;
	fulltext?: string | undefined;
}

export module SetupFilterDto {

}
