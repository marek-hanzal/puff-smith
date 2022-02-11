import {CreateDefaultForm, ICreateDefaultFormProps, useBasesQueryInvalidate} from "@/sdk/puff-smith/api/lab/base/endpoint";
import {FC} from "react";
import {Divider, InputNumber, message} from "antd";
import {Centered, FormItem, Submit} from "@leight-core/leight";
import {VendorSelect, VendorTooltip} from "@/puff-smith/site/lab/vendor";
import {BaseIcon} from "@/puff-smith";
import {useTranslation} from "react-i18next";

export interface ICreateBaseFormProps extends Partial<ICreateDefaultFormProps> {
}

export const CreateBaseForm: FC<ICreateBaseFormProps> = ({onSuccess, ...props}) => {
	const {t} = useTranslation();
	const basesQueryInvalidate = useBasesQueryInvalidate();
	return <CreateDefaultForm
		layout={'vertical'}
		translation={'lab.base'}
		onSuccess={response => {
			message.success(t("lab.base.create.success", {data: response.response}));
			basesQueryInvalidate();
			onSuccess?.(response);
		}}
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
			field={'pg'}
			required
		>
			<InputNumber
				style={{width: '100%'}}
				min={0}
				max={100}
			/>
		</FormItem>
		<FormItem
			field={'vg'}
			required
		>
			<InputNumber
				style={{width: '100%'}}
				min={0}
				max={100}
			/>
		</FormItem>
		<Divider/>
		<Centered>
			<Submit icon={<BaseIcon/>} label={'create.submit'}/>
		</Centered>
	</CreateDefaultForm>
}
