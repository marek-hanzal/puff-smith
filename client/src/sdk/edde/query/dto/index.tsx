export interface Query<TOrderBy = void | undefined, TFilter = void | undefined> {
	page: number | null;
	size: number | null;
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
