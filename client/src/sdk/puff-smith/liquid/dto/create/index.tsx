export interface CreateDto {
	name: string;
	pg: number;
	vg: number;
	volume: number;
	description: string | null;
	vendorId: string;
}

export module CreateDto {

}
