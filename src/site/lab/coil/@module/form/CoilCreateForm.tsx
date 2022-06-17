import {CoilIcon} from "@/puff-smith/component/icon/CoilIcon";
import {WireSelect} from "@/puff-smith/site/inventory/wire/@module/form/WireSelect";
import {CoilSizeInput} from "@/puff-smith/site/shared/coil/@module/form/CoilSizeInput";
import {CoilWrapsInput} from "@/puff-smith/site/shared/coil/@module/form/CoilWrapsInput";
import {WireCreateInline} from "@/puff-smith/site/shared/wire/@module/form/WireCreateInline";
import {CreateDefaultForm, ICreateDefaultFormProps} from "@/sdk/api/coil/create";
import {useCoilInventoryQueryInvalidate} from "@/sdk/api/inventory/coil/query";
import {Centered, FormItem, Submit} from "@leight-core/client";
import {Divider, message} from "antd";
import {FC} from "react";
import {useTranslation} from "react-i18next";

export interface ICoilCreateFormProps extends Partial<ICreateDefaultFormProps> {
}

export const CoilCreateForm: FC<ICoilCreateFormProps> = ({onSuccess, ...props}) => {
	const {t} = useTranslation();
	const coilInventoryQueryInvalidate = useCoilInventoryQueryInvalidate();
	return <CreateDefaultForm
		translation={"lab.coil.create"}
		onSuccess={async result => {
			message.success(t("lab.coil.create.success"));
			await coilInventoryQueryInvalidate();
			onSuccess?.(result);
		}}
		{...props}
	>
		<FormItem field={"size"}>
			<CoilSizeInput/>
		</FormItem>
		<FormItem field={"wraps"}>
			<CoilWrapsInput/>
		</FormItem>
		<FormItem field={"wireId"} required extra={<WireCreateInline/>}>
			<WireSelect
				allowClear
			/>
		</FormItem>
		<Divider/>
		<Centered>
			<Submit icon={<CoilIcon/>} label={"create"}/>
		</Centered>
	</CreateDefaultForm>;
};
