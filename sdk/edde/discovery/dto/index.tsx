export interface DiscoveryIndexDto {
	index: import("@/sdk/edde/discovery/dto/index").DiscoveryItemDto[];
}

export module DiscoveryIndexDto {

}


export interface DiscoveryItemDto {
	id: string;
	url: string;
	link: string;
	params: string[];
}

export module DiscoveryItemDto {

}
