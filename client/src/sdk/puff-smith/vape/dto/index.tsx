export interface VapeDto {
	id: string;
	setupId: string;
	setup: import("@/sdk/puff-smith/setup/dto/index").SetupDto;
	mixtureId: string;
	mixture: import("@/sdk/puff-smith/mixture/dto/index").MixtureDto;
	driptipId: string | null;
	driptip: import("@/sdk/puff-smith/driptip/dto/index").DriptipDto | null;
	rating: number;
	taste: number;
	throathit: number | null;
	fruits: number | null;
	tobacco: number | null;
	cakes: number | null;
	complex: number | null;
	fresh: number | null;
	clouds: number;
	mtl: number;
	dl: number;
	dryhit: number;
	leaks: number;
	airflow: number;
	juice: number | null;
	power: number | null;
	tc: number | null;
	stamp: string;
}

export module VapeDto {

}


export interface VapeOrderByDto {

}

export module VapeOrderByDto {

}


export interface VapeFilterDto {
	atomizerId?: string | null | undefined;
	userId?: string | null | undefined;
	id?: string | undefined;
	fulltext?: string | undefined;
}

export module VapeFilterDto {

}
