export interface JobLogOrderByDto {

}

export module JobLogOrderByDto {

}


export interface JobLogFilterDto {
	jobId?: string | undefined;
	level?: number[] | undefined;
	type?: string[] | undefined;
	notType?: string[] | undefined;
	id?: string | undefined;
	fulltext?: string | undefined;
}

export module JobLogFilterDto {

}


export interface JobLogDto {
	id: string;
	level: number;
	message: string;
	type: string | null;
	reference: string | null;
	item: any | null;
}

export module JobLogDto {

}


export interface LogLevelDto {
	level: number;
	label: string;
}

export module LogLevelDto {

}


export interface LogTypeDto {
	id: string;
	type?: string | undefined;
}

export module LogTypeDto {

}
