export interface CreateDto {
	name: string;
	description: string | null;
	atomizerId: string;
	coilId: string;
	cottonId: string;
	coils: number;
	coilOffset: number;
	cottonOffset: number;
	ohm: number;
}

export module CreateDto {

}
