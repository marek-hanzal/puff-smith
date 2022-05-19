import {ofParams} from "@/puff-smith/service";
import {TransactionRepository} from "@/puff-smith/service/transaction/TransactionRepository";
import {FetchEndpoint} from "@leight-core/server";

export default FetchEndpoint<"Puffies", number>(async params => TransactionRepository(ofParams(params)).sumOf());
