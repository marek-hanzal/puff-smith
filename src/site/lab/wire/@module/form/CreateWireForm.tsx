import {CreateDefaultForm, ICreateDefaultFormProps, useWiresQueryInvalidate} from "@/sdk/puff-smith/api/lab/wire/endpoint";
import {FC} from "react";
import {Centered, FormItem, Submit, SwitchItem} from "@leight-core/common";
import {Divider, message} from "antd";
import {GaInput, WireIcon} from "@/puff-smith";
import {useTranslation} from "react-i18next";
import {VendorTooltip} from "@/puff-smith/site/lab/vendor/@module/form/VendorTooltip";
import {VendorSelect} from "@/puff-smith/site/lab/vendor/@module/form/VendorSelect";
import {DrawSelect} from "@/puff-smith/component/input/DrawSelect";

export interface ICreateWireFormProps extends Partial<ICreateDefaultFormProps> {
}

export const CreateWireForm: FC<ICreateWireFormProps> = ({onSuccess, ...props}) => {
	const {t} = useTranslation();
	const wiresQueryInvalidate = useWiresQueryInvalidate();
	return <CreateDefaultForm
		layout={'vertical'}
		translation={'lab.wire'}
		onSuccess={response => {
			message.success(t("lab.wire.create.success", {data: response.response}));
			wiresQueryInvalidate();
			onSuccess?.(response);
		}}
		toForm={() => ({
			tc: false,
		})}
		{...props}
	>
		<FormItem
			field={'name'}
			required
		/>
		<FormItem
			field={'vendorId'}
			required
			help={<VendorTooltip/>}
		>
			<VendorSelect/>
		</FormItem>
		<FormItem
			field={'description'}
		/>
		<FormItem
			field={'ga'}
		>
			<GaInput/>
		</FormItem>
		<SwitchItem
			field={'tc'}
		/>
		<FormItem
			field={'drawIds'}
		>
			<DrawSelect/>
		</FormItem>
		<Divider/>
		<Centered>
			<Submit icon={<WireIcon/>} label={'create.submit'}/>
		</Centered>
	</CreateDefaultForm>
}
