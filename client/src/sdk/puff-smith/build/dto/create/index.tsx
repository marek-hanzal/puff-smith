export interface CreateDto {
	name: string;
	description: string | null;
	atomizerId: string;
	coilId: string;
	cottonId: string;
	coils: number;
	coil: number;
	cotton: number;
	ohm: number;
}

export module CreateDto {

}
