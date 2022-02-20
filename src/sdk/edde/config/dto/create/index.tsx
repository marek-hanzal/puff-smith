export interface CreateDto {
	config: import("@/sdk/edde/config/dto/create/index").ConfigDto;
}

export module CreateDto {

}


export interface ConfigDto {
	key: string;
	value?: any | null | undefined;
}

export module ConfigDto {

}
