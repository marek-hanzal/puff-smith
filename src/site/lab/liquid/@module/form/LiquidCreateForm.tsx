import {LiquidIcon} from "@/puff-smith";
import {CreateDefaultForm, ICreateDefaultFormProps} from "@/sdk/api/liquid/create";
import {useLiquidsQueryInvalidate} from "@/sdk/api/liquid/query";
import {usePuffiesQueryInvalidate} from "@/sdk/api/user/puffies";
import {Centered, DatePicker, FormItem, Submit} from "@leight-core/client";
import {Divider, InputNumber, message} from "antd";
import {FC} from "react";
import {useTranslation} from "react-i18next";

export interface ILiquidCreateFormProps extends Partial<ICreateDefaultFormProps> {
}

export const LiquidCreateForm: FC<ILiquidCreateFormProps> = ({onSuccess, ...props}) => {
	const {t} = useTranslation();
	const liquidsQueryInvalidate = useLiquidsQueryInvalidate();
	const puffiesQueryInvalidate = usePuffiesQueryInvalidate();
	return <CreateDefaultForm
		translation={"lab.liquid"}
		onSuccess={async response => {
			await liquidsQueryInvalidate();
			message.success(t("lab.liquid.create.success", {
				data: {
					name: response.response.name,
					amount: -1 * response.response.transaction.amount,
				}
			}));
			await puffiesQueryInvalidate();
			onSuccess?.(response);
		}}
		{...props}
	>
		<FormItem field={"name"} required/>
		<FormItem field={"volume"} required>
			<InputNumber min={10} max={1000} style={{width: "100%"}}/>
		</FormItem>
		<FormItem field={"mixed"}>
			<DatePicker style={{width: "100%"}}/>
		</FormItem>
		<Divider/>
		<Centered>
			<Submit icon={<LiquidIcon/>} label={"create"}/>
		</Centered>
	</CreateDefaultForm>;
};
