import memoizee from "memoizee";

export const memoBoosterToMap = memoizee(async (boosterId, boosterSource) => boosterId ? boosterSource().toMap(boosterId) : undefined, {
	primitive: true,
	max: 256,
	preFetch: true,
	maxAge: 24 * 60 * 60 * 1000,
	length: 1,
	resolvers: [String],
});
