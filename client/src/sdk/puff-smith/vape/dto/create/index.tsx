export interface CreateDto {
	setupId: string;
	mixtureId: string;
	driptipId: string | null;
	rating: number;
	taste: number;
	fruits: number | null;
	tobacco: number | null;
	cakes: number | null;
	complex: number | null;
	fresh: number | null;
	clouds: number;
	mtl: number;
	dl: number;
	airflow: number;
	juice: number | null;
	power: number | null;
	tc: number | null;
}

export module CreateDto {

}
