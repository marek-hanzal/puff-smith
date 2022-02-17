export interface AddressDto {
	street: string | null;
	city: string | null;
	zip: string | null;
}

export module AddressDto {

}


export interface LoginRequest {
	login: string;
	password: string;
}

export module LoginRequest {

}
