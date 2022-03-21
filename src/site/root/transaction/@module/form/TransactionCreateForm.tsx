import {FC} from "react";
import {CreateDefaultForm, ICreateDefaultFormProps} from "@/sdk/api/transaction/create";
import {Centered, FormItem, Submit} from "@leight-core/client";
import {UserSelect} from "@/puff-smith/site/shared/user";
import {Divider, InputNumber, message} from "antd";
import {PurchaseIcon} from "@/puff-smith";
import {useTranslation} from "react-i18next";
import {useTransactionsQueryInvalidate} from "@/sdk/api/transaction/query";
import {useSumQueryInvalidate} from "@/sdk/api/transaction/sum";

export interface ITransactionCreateFormProps extends Partial<ICreateDefaultFormProps> {
}

export const TransactionCreateForm: FC<ITransactionCreateFormProps> = ({onSuccess, ...props}) => {
	const {t} = useTranslation();
	const transactionsQueryInvalidate = useTransactionsQueryInvalidate();
	const sumQueryInvalidate = useSumQueryInvalidate();
	return <CreateDefaultForm
		translation={'root.transaction'}
		onSuccess={async response => {
			message.success(t("root.transaction.create.success", {data: response.response}));
			await transactionsQueryInvalidate();
			await sumQueryInvalidate();
			onSuccess?.(response);
		}}
		{...props}
	>
		<FormItem field={'userId'} required>
			<UserSelect/>
		</FormItem>
		<FormItem field={'amount'} required>
			<InputNumber min={-1000} max={1000} style={{width: '100%'}}/>
		</FormItem>
		<FormItem field={'note'}/>
		<Divider/>
		<Centered>
			<Submit icon={<PurchaseIcon/>} label={'create'}/>
		</Centered>
	</CreateDefaultForm>
}
