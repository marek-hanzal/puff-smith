export interface CreateDto {
	name: string;
	description: string | null;
	created: string | null;
	glow: number | null;
	atomizerId: string;
	coilId: string;
	cottonId: string;
	coils: number;
	coilOffset: number;
	cottonOffset: number;
	ohm: number | null;
}

export module CreateDto {

}
