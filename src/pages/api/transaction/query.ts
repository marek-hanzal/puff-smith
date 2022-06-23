import {ITransactionSource} from "@/puff-smith/service/transaction/interface";
import {TransactionSource} from "@/puff-smith/service/transaction/TransactionSource";
import {QueryEndpoint} from "@leight-core/server";

export default QueryEndpoint<"Transaction", ITransactionSource>({
	source: TransactionSource,
});
