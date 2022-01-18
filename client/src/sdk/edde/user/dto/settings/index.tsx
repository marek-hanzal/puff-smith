export interface UserSettingsDto {
	language?: string | undefined;
	date?: string | undefined;
	datetime?: string | undefined;
}

export module UserSettingsDto {

}


export interface UpdateSettingsDto {
	settings: import("@/sdk/edde/user/dto/settings/index").UserSettingsDto;
}

export module UpdateSettingsDto {

}
