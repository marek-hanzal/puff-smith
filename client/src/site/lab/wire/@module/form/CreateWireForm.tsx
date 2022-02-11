import {CreateDefaultForm, ICreateDefaultFormProps, useWiresQueryInvalidate} from "@/sdk/puff-smith/api/lab/wire/endpoint";
import {FC} from "react";
import {Centered, FormItem, Submit} from "@leight-core/leight";
import {Divider, InputNumber, message} from "antd";
import {VendorSelect, VendorTooltip} from "@/puff-smith/site/lab/vendor";
import {WireIcon} from "@/puff-smith";
import {useTranslation} from "react-i18next";

export interface ICreateWireFormProps extends Partial<ICreateDefaultFormProps> {
}

export const CreateWireForm: FC<ICreateWireFormProps> = ({onSuccess, ...props}) => {
	const {t} = useTranslation();
	const wiresQueryInvalidate = useWiresQueryInvalidate();
	return <CreateDefaultForm
		layout={'vertical'}
		onSuccess={response => {
			message.success(t("lab.wire.create.success", {data: response.response}));
			wiresQueryInvalidate();
			onSuccess?.(response);
		}}
		{...props}
	>
		<FormItem
			field={'name'}
			labels={['lab.wire.name.label']}
			required
		/>
		<FormItem
			field={'vendorId'}
			labels={['lab.wire.vendorId.label']}
			required
			help={<VendorTooltip/>}
		>
			<VendorSelect/>
		</FormItem>
		<FormItem
			field={'description'}
			labels={['lab.wire.description.label']}
		/>
		<FormItem
			field={'ga'}
			labels={['lab.wire.ga.label']}
		>
			<InputNumber style={{width: '100%'}} min={20} max={48}/>
		</FormItem>
		<Divider/>
		<Centered>
			<Submit icon={<WireIcon/>} label={'lab.wire.create.submit'}/>
		</Centered>
	</CreateDefaultForm>
}
