import {ITransactionSource} from "@/puff-smith/service/transaction/interface";
import {TransactionSource} from "@/puff-smith/service/transaction/TransactionSource";
import {CountEndpoint} from "@leight-core/server";

export default CountEndpoint<"TransactionCount", ITransactionSource>({
	source: TransactionSource,
});
