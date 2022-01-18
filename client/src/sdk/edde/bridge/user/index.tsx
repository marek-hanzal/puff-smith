export interface UserDto {
	email?: string | undefined;
	site: string;
	settings?: import("@/sdk/edde/user/dto/settings/index").UserSettingsDto | undefined;
	id: string;
	name: string;
}

export module UserDto {

}
