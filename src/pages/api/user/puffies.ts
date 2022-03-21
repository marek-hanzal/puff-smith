import {FetchEndpoint} from "@leight-core/server";
import {transactionPuffiesOf} from "@/puff-smith/service/transaction";

export default FetchEndpoint<"Puffies", number>(async ({toUserId}) => {
	return transactionPuffiesOf(await toUserId());
})
