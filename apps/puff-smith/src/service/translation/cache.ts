import {ITranslationEntity} from "@/puff-smith/service/translation/interface";
import LRUCache             from "lru-cache";

export const TranslationCache = {
	query: new LRUCache<string, ITranslationEntity[]>({
		max: 1,
	}),
};
