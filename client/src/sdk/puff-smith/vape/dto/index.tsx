export interface CreateDto {
	modId: string;
	buildId: string;
	mixtureId: string;
	driptipId: string | null;
}

export module CreateDto {

}


export interface VapeDto {
	id: string;
	modId: string;
	mod: import("@/sdk/puff-smith/mod/dto/index").ModDto;
	buildId: string;
	build: import("@/sdk/puff-smith/build/dto/index").BuildDto;
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


export interface DeleteDto {
	id: string;
}

export module DeleteDto {

}


export interface PatchDto {
	id: string;
	modId: string;
	buildId: string;
	mixtureId: string;
	driptipId: string | null;
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
}

export module PatchDto {

}


export interface RateDto {
	id: string;
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
}

export module RateDto {

}


export interface VapeOrderByDto {

}

export module VapeOrderByDto {

}


export interface VapeFilterDto {
	atomizerIds?: string[] | null | undefined;
	modIds?: string[] | null | undefined;
	mixtureIds?: string[] | null | undefined;
	liquidIds?: string[] | null | undefined;
	coilIds?: string[] | null | undefined;
	userId?: string | null | undefined;
	rate?: string | null | undefined;
	id?: string | undefined;
	fulltext?: string | undefined;
}

export module VapeFilterDto {

}
