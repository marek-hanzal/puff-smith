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
	column: any;
	value: any;
	group?: any | null | undefined;
}

export module DataDto {

}
