import LRUCache from "lru-cache";

const cache = new LRUCache<string, any>({
	max: 1024,
});

export default cache;
