import {CreateDefaultForm, ICreateDefaultFormProps, useCottonsQueryInvalidate} from "@/sdk/puff-smith/api/lab/cotton/endpoint";
import {FC} from "react";
import {Centered, FormItem, Submit} from "@leight-core/common";
import {Divider, message} from "antd";
import {CottonIcon} from "@/puff-smith";
import {useTranslation} from "react-i18next";
import {VendorTooltip} from "../../../vendor/@module/form/VendorTooltip";
import {VendorSelect} from "../../../vendor/@module/form/VendorSelect";

export interface ICreateCottonFormProps extends Partial<ICreateDefaultFormProps> {
}

export const CreateCottonForm: FC<ICreateCottonFormProps> = ({onSuccess, ...props}) => {
	const {t} = useTranslation();
	const cottonsQueryInvalidate = useCottonsQueryInvalidate();
	return <CreateDefaultForm
		layout={'vertical'}
		translation={'lab.cotton'}
		onSuccess={response => {
			message.success(t("lab.cotton.create.success", {data: response.response}));
			cottonsQueryInvalidate();
			onSuccess?.(response);
		}}
		{...props}
	>
		<FormItem
			field={'name'}
			required
		/>
		<FormItem
			field={'description'}
		/>
		<FormItem
			field={'vendorId'}
			required
			help={<VendorTooltip/>}
		>
			<VendorSelect/>
		</FormItem>
		<Divider/>
		<Centered>
			<Submit icon={<CottonIcon/>} label={'create.submit'}/>
		</Centered>
	</CreateDefaultForm>
}
