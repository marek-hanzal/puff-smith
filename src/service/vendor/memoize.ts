import memoizee from "memoizee";

export const memoVendorToMap = memoizee(async (id, vendorSource) => vendorSource().toMap(id), {
	primitive: true,
	preFetch: true,
	maxAge: 24 * 60 * 60 * 1000,
	length: 1,
	resolvers: [String],
});
