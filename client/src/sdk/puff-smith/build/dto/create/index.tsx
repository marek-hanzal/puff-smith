export interface CreateDto {
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
