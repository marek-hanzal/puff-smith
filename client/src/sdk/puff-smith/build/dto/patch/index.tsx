export interface PatchDto {
	id: string;
	active?: boolean | null | undefined;
	rating: number | null;
	glow: number | null;
	created?: string | null | undefined;
	atomizerId?: string | null | undefined;
	coilId?: string | null | undefined;
	cottonId?: string | null | undefined;
	coils?: number | null | undefined;
	coilOffset?: number | null | undefined;
	cottonOffset?: number | null | undefined;
	ohm?: number | null | undefined;
}

export module PatchDto {

}
