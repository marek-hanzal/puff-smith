export interface UserDto {
	mobile?: string | undefined;
	emea: string;
	email: string | null;
	active: boolean;
	id: string;
	name: string;
	site: string | null;
	settings?: import("@/sdk/edde/user/dto/settings/index").UserSettingsDto | undefined;
	roles: import("@/sdk/edde/role/dto/index").RoleDto[];
}

export module UserDto {

}


export interface CurrentUser {
	mobile: string | null;
	email: string | null;
	emea: string;
	id: string;
	name: string;
	site: string;
	settings?: import("@/sdk/edde/user/dto/settings/index").UserSettingsDto | undefined;
	roles: import("@/sdk/edde/role/dto/index").RoleDto[];
}

export module CurrentUser {

}
