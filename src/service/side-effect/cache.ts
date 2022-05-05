import LRUCache from "lru-cache";

const cache = new LRUCache({
	max: 1024,
});

export default cache;
