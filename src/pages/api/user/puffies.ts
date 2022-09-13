import {GetEndpoint} from "@leight-core/server";

export default GetEndpoint<"Puffies", number>({
	handler: async ({user}) => -1,
});
