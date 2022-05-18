import memoizee from "memoizee";

export const memoVendorToMap = memoizee(async (id, vendorService) => vendorService().toMap(id), {
	primitive: true,
	preFetch: true,
	maxAge: 24 * 60 * 60 * 1000,
	length: 1,
	resolvers: [String],
});
