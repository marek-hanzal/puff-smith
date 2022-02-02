export interface RateDto {
	max: number;
	ratings: import("@/sdk/puff-smith/rate/dto/index").RatingDto[];
}

export module RateDto {

}


export interface RatingDto {
	count: number;
	label: string;
}

export module RatingDto {

}
