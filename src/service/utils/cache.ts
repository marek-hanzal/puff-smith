import LRUCache from "lru-cache";

export const createCache = () => ({
	query: new LRUCache<string, any>({
		max: 128,
	}),
	count: new LRUCache<string, number>({
		max: 4096,
	}),
});
