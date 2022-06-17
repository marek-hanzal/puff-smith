import {ITransactionSource} from "@/puff-smith/service/transaction/interface";
import {TransactionSource} from "@/puff-smith/service/transaction/TransactionSource";
import {CreateEndpoint} from "@leight-core/server";

export default CreateEndpoint<"Create", ITransactionSource>(TransactionSource);
