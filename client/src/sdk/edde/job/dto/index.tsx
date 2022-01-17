export interface JobDto<TResult = void | undefined> {
	id: string;
	total: number;
	success: number;
	ratio: number;
	service: string;
	error: number;
	count: number;
	progress: number;
	performance: number;
	runtime: number;
	formatted: string;
	status: number;
	result: TResult | null;
	logs: boolean;
	params: any | null;
	commit: boolean;
	user?: import("@/sdk/edde/bridge/user/index").UserDto | undefined;
	created: string;
	done: string | null;
}

export module JobDto {

}


export interface JobOrderByDto {

}

export module JobOrderByDto {

}


export interface JobFilterDto {
	userId?: string | undefined;
	services?: string[] | undefined;
	params?: string | undefined;
	status?: number[] | undefined;
	commit?: boolean | undefined;
	id?: string | undefined;
	fulltext?: string | undefined;
}

export module JobFilterDto {

}
