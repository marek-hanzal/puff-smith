export interface CreateDto {
	created: string | null;
	glow: number | null;
	atomizerId: string;
	coil: import("@/sdk/puff-smith/coil/dto/create/index").CreateDto;
	cottonId: string;
	coils: number;
	coilOffset: number;
	cottonOffset: number;
	ohm: number | null;
	deactivate: boolean | null;
}

export module CreateDto {

}
