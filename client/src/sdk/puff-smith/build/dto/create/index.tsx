export interface CreateDto {
	created: string | null;
	glow: number | null;
	rating: number | null;
	atomizerId: string;
	coilId: string;
	cottonId: string;
	coils: number;
	coilOffset: number;
	cottonOffset: number;
	ohm: number | null;
	deactivate: boolean | null;
}

export module CreateDto {

}
