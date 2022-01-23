export interface PatchDto {
	id: string;
	name?: string | null | undefined;
	description?: string | null | undefined;
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
