import {WireIcon} from "@/puff-smith/component/icon/WireIcon";
import {VendorCreateInline} from "@/puff-smith/site/shared/vendor/@module/form/VendorCreateInline";
import {VendorSelect} from "@/puff-smith/site/shared/vendor/@module/form/VendorSelect";
import {CreateDefaultForm, ICreateDefaultFormProps} from "@/sdk/api/cotton/create";
import {useCottonQueryInvalidate} from "@/sdk/api/cotton/query";
import {Centered, FormItem, Submit} from "@leight-core/client";
import {Divider, InputNumber, message} from "antd";
import {FC} from "react";
import {useTranslation} from "react-i18next";

export interface ICottonCreateFormProps extends Partial<ICreateDefaultFormProps> {
}

export const CottonCreateForm: FC<ICottonCreateFormProps> = ({onSuccess, ...props}) => {
	const {t} = useTranslation();
	const cottonQueryInvalidate = useCottonQueryInvalidate();
	return <CreateDefaultForm
		translation={"shared.cotton.create"}
		onSuccess={async response => {
			message.success(t("shared.cotton.create.success", response.response));
			await cottonQueryInvalidate();
			onSuccess?.(response);
		}}
		toMutation={values => ({
			...values,
			withInventory: true,
		})}
		{...props}
	>
		<FormItem field={"name"} required/>
		<FormItem field={"vendorId"} required extra={<VendorCreateInline/>}>
			<VendorSelect/>
		</FormItem>
		<FormItem field={"cost"} hasTooltip required>
			<InputNumber min={0} max={9999} style={{width: "100%"}}/>
		</FormItem>
		<Divider/>
		<Centered>
			<Submit icon={<WireIcon/>} label={"create"}/>
		</Centered>
	</CreateDefaultForm>;
};
