export interface PatchDto {
	config: import("@/sdk/edde/config/dto/patch/index").ConfigDto;
	id: string;
}

export module PatchDto {

}


export interface ConfigDto {
	key: string;
	value?: any | null | undefined;
}

export module ConfigDto {

}
