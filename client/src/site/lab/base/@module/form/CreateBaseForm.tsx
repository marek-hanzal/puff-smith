import {CreateDefaultForm, ICreateDefaultFormProps, useBasesQueryInvalidate} from "@/sdk/puff-smith/api/lab/base/endpoint";
import {FC} from "react";
import {Divider, message} from "antd";
import {Centered, FormItem, Submit} from "@leight-core/leight";
import {BaseIcon, PgSlider, VgSlider} from "@/puff-smith";
import {useTranslation} from "react-i18next";
import {VendorTooltip} from "@/puff-smith/site/lab/vendor/@module/form/VendorTooltip";
import {VendorSelect} from "@/puff-smith/site/lab/vendor/@module/form/VendorSelect";

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
			<PgSlider/>
		</FormItem>
		<FormItem
			field={'vg'}
			required
		>
			<VgSlider/>
		</FormItem>
		<Divider/>
		<Centered>
			<Submit icon={<BaseIcon/>} label={'create.submit'}/>
		</Centered>
	</CreateDefaultForm>
}
