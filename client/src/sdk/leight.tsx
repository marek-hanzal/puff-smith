export interface PageRequestDto<TOrderBy, TFilter> {
	filter?: TFilter | null;
	orderBy?: TOrderBy | null;
	page: number;
	size: number;
}

export interface PageResponseDto<TItem> {
	count: number;
	items: TItem[];
	pages: number;
	size: number;
	total: number;
}
