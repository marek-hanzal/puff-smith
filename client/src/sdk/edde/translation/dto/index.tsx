export interface TranslationsDto {
	translations: import("@/sdk/edde/translation/dto/index").TranslationDto[];
}

export module TranslationsDto {

}


export interface TranslationDto {
	id: string;
	language: string;
	namespace: string;
	label: string;
	text: string;
}

export module TranslationDto {

}
