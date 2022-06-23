import {TransactionSource} from "@/puff-smith/service/transaction/TransactionSource";
import {GetEndpoint} from "@leight-core/server";

export default GetEndpoint<"Puffies", number>({
	handler: async ({user}) => TransactionSource().withUser(user).sumOf(),
});
