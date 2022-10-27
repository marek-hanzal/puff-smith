import LRUCache from "lru-cache";

export const createCache = () => ({
	count: new LRUCache<string, number>({
		max: 4096,
	}),
	query: new LRUCache<string, any>({
		max: 128,
	}),
});
