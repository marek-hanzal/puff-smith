export namespace vapersdream.discovery.index {
	export interface IndexResponse {
		index: { [index in string]: leight.discovery.DiscoveryItem };
	}
}

export namespace leight.discovery {
	export interface DiscoveryItem {
		id: string;
		link: string;
		url: string;
	}
}

export namespace vapersdream.translation.index {
	export interface IndexResponse {
		translations: TranslationDto[];
	}

	export interface TranslationDto {
		label: string;
		language: string;
		namespace: string;
		text: string;
	}
}

export namespace vapersdream.user.user {
	export interface UserDto {
		id: string;
		site: string;
	}
}
