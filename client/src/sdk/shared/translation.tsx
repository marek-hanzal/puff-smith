import {createGet,} from "@leight-core/leight";

export interface IndexResponse {
	translations: TranslationDto[];
}

export interface TranslationDto {
	label: string;
	language: string;
	text: string | null;
}

export const doIndexFetch = createGet<IndexResponse>("translation.index");
