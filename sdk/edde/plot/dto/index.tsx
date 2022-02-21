export interface PlotDto {
	isStack: boolean;
	isGroup: boolean;
	x: string;
	y: string;
	group: string;
	count: number;
	data: import("@/sdk/edde/plot/dto/index").DataDto[];
}

export module PlotDto {

}


export interface DataDto {
	column: string;
	value: any;
	group?: string | null | undefined;
	count: number;
}

export module DataDto {

}
