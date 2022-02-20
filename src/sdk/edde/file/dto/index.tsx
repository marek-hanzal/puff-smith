export interface CommitDto {
	uuid: string;
	path: string;
	name?: string | undefined;
	replace?: boolean | undefined;
}

export module CommitDto {

}


export interface FileDto {
	id: string;
	path: string;
	name: string;
	mime: string;
	size: number;
	native: string;
	created: string;
	updated?: string | undefined;
	ttl?: number | undefined;
	user?: import("@/sdk/edde/bridge/user/index").UserDto | undefined;
}

export module FileDto {

}


export interface FileOrderByDto {
	path?: boolean | undefined;
	name?: boolean | undefined;
	native?: boolean | undefined;
	mime?: boolean | undefined;
	size?: boolean | undefined;
	userId?: boolean | undefined;
	ttl?: boolean | undefined;
	created?: boolean | undefined;
	updated?: boolean | undefined;
}

export module FileOrderByDto {

}


export interface FileFilterDto {
	userIds?: string[] | undefined;
	paths?: string[] | undefined;
	path?: string | undefined;
	pathEndLike?: string | undefined;
	mimes?: string[] | undefined;
	id?: string | undefined;
	fulltext?: string | undefined;
}

export module FileFilterDto {

}
