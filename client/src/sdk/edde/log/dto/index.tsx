export interface LogOrderByDto {
	stamp?: boolean | undefined;
}

export module LogOrderByDto {

}


export interface LogFilterDto {
	types?: string[] | undefined;
	userIds?: string[] | undefined;
	tagIds?: string[] | undefined;
	stamp?: import("@/sdk/edde/repository/dto/index").RangeDto | undefined;
	reference?: string | undefined;
	id?: string | undefined;
	fulltext?: string | undefined;
}

export module LogFilterDto {

}


export interface LogDto {
	id: string;
	type: string;
	log: string;
	stack?: string | undefined;
	stamp: string;
	trace?: string | undefined;
	reference?: string | undefined;
	microtime: number;
	user?: import("@/sdk/edde/bridge/user/index").UserDto | undefined;
	tags: import("@/sdk/edde/tag/dto/index").TagDto[];
}

export module LogDto {

}
