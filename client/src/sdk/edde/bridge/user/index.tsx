export interface UserDto {
	id: string;
	name: string;
	email: string;
	site: string;
	settings?: import("@/sdk/edde/user/dto/settings/index").UserSettingsDto | undefined;
	roles: import("@/sdk/edde/role/dto/index").RoleDto[];
}

export module UserDto {

}


export interface CurrentUser {
	id: string;
	name: string;
	email: string;
	site: string;
	settings?: import("@/sdk/edde/user/dto/settings/index").UserSettingsDto | undefined;
	roles: import("@/sdk/edde/role/dto/index").RoleDto[];
}

export module CurrentUser {

}
