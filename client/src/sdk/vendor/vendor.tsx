import {createPost, IPageRequest, IPageResponse} from "@leight-core/leight";

export interface VendorDto {
	code: string;
	id: string;
	name: string;
}

export interface VendorOrderByDto {
	code?: boolean | null;
	name?: boolean | null;
}

export interface VendorFilterDto {
	category?: string | null;
	fulltext?: string | null;
}

export const doPage = createPost<IPageRequest<VendorOrderByDto, VendorFilterDto>, IPageResponse<VendorDto>>("user.vendor.page");
