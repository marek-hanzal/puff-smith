export interface ProfilerNameDto {
	id: string;
	name: string;
}

export module ProfilerNameDto {

}


export interface ProfilerOrderByDto {
	name?: boolean | undefined;
	stamp?: boolean | undefined;
	runtime?: boolean | undefined;
}

export module ProfilerOrderByDto {

}


export interface ProfilerFilterDto {
	name?: string | undefined;
	names?: string[] | undefined;
	id?: string | undefined;
	fulltext?: string | undefined;
}

export module ProfilerFilterDto {

}


export interface ProfilerDto {
	id: string;
	name: string;
	stamp: number;
	runtime: number;
}

export module ProfilerDto {

}
