import {PurchaseIcon} from "@/puff-smith/component/icon/PurchaseIcon";
import {UserSelect} from "@/puff-smith/site/shared/user/@module/component/UserSelect";
import {CreateDefaultForm, ICreateDefaultFormProps} from "@/sdk/api/transaction/create";
import {useTransactionQueryInvalidate} from "@/sdk/api/transaction/query";
import {useSumQueryInvalidate} from "@/sdk/api/transaction/sum";
import {Centered, FormItem, Submit} from "@leight-core/client";
import {Divider, InputNumber, message} from "antd";
import {FC} from "react";
import {useTranslation} from "react-i18next";

export interface ITransactionCreateFormProps extends Partial<ICreateDefaultFormProps> {
}

export const TransactionCreateForm: FC<ITransactionCreateFormProps> = ({onSuccess, ...props}) => {
	const {t} = useTranslation();
	const transactionsQueryInvalidate = useTransactionQueryInvalidate();
	const sumQueryInvalidate = useSumQueryInvalidate();
	return <CreateDefaultForm
		translation={"root.transaction"}
		onSuccess={async response => {
			message.success(t("root.transaction.create.success", {data: response.response}));
			await Promise.all([
				transactionsQueryInvalidate(),
				sumQueryInvalidate(),
			]);
			onSuccess?.(response);
		}}
		{...props}
	>
		<FormItem field={"userId"} required>
			<UserSelect/>
		</FormItem>
		<FormItem field={"amount"} required>
			<InputNumber min={-100000} max={100000} style={{width: "100%"}}/>
		</FormItem>
		<FormItem field={"note"}/>
		<Divider/>
		<Centered>
			<Submit icon={<PurchaseIcon/>} label={"create"}/>
		</Centered>
	</CreateDefaultForm>;
};
