import {CreateEndpoint} from "@leight-core/server";
import {ITransaction, ITransactionCreate, transactionCreate, transactionMapper} from "@/puff-smith/service/transaction";

export default CreateEndpoint<"Create", ITransactionCreate, ITransaction>(async ({request}) => {
	return transactionMapper(await transactionCreate(request));
});
