export interface Query<TOrderBy = void | undefined, TFilter = void | undefined> {
	page?: number | null | undefined;
	size?: number | null | undefined;
	orderBy?: TOrderBy | null | undefined;
	filter?: TFilter | null | undefined;
}

export module Query {

}


export interface QueryResult<TItem> {
	total: number;
	size: number;
	pages: number;
	count: number;
	items: TItem[];
}

export module QueryResult {

}
