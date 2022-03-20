import {FetchEndpoint} from "@leight-core/server";
import {getToken} from "next-auth/jwt";
import {transactionPuffiesOf} from "@/puff-smith/service/transaction";

export default FetchEndpoint<"Puffies", number>(async ({req}) => {
	const token: any = await getToken({req});
	return transactionPuffiesOf(token.sub);
})
