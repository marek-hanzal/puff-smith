import memoizee from "memoizee";

export const memoBaseToMap = memoizee(async (baseId, baseService) => baseId ? baseService().toMap(baseId) : undefined, {
	primitive: true,
	max: 256,
	preFetch: true,
	maxAge: 24 * 60 * 60 * 1000,
	length: 1,
	resolvers: [String],
});
