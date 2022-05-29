import LRUCache from "lru-cache";

export const createCache = () => {
	const query = new LRUCache<string, any>({
		max: 128,
	});
	const count = new LRUCache<string, number>({
		max: 4096,
	});

	return {
		count,
		query,
		clear: () => {
			query.clear();
			count.clear();
		}
	};
};
