import {TransactionSource} from "@/puff-smith/service/transaction/TransactionSource";
import {FetchEndpoint} from "@leight-core/server";

export default FetchEndpoint<"Puffies", number>(async ({user}) => TransactionSource().withUser(user).sumOf());
