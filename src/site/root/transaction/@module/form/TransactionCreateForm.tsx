import {FC} from "react";
import {CreateDefaultForm, ICreateDefaultFormProps} from "@/sdk/api/transaction/create";
import {FormItem} from "@leight-core/client";
import {UserSelect} from "@/puff-smith/site/shared/user";

export interface ITransactionCreateFormProps extends Partial<ICreateDefaultFormProps> {
}

export const TransactionCreateForm: FC<ITransactionCreateFormProps> = props => {
	return <CreateDefaultForm
		translation={'root.transaction'}
		{...props}
	>
		<FormItem field={'userId'}>
			<UserSelect/>
		</FormItem>
	</CreateDefaultForm>
}
