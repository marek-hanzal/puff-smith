import {CreateDefaultForm, ICreateDefaultFormProps, useAtomizersQueryInvalidate} from "@/sdk/puff-smith/api/lab/atomizer/endpoint";
import {FC} from "react";
import {Centered, FormItem, Submit} from "@leight-core/leight";
import {Divider, message} from "antd";
import {AtomizerIcon} from "@/puff-smith";
import {useTranslation} from "react-i18next";
import {VendorTooltip} from "@/puff-smith/site/lab/vendor/@module/form/VendorTooltip";
import {VendorSelect} from "@/puff-smith/site/lab/vendor/@module/form/VendorSelect";
import {DrawSelect} from "@/puff-smith/component/input/DrawSelect";

export interface ICreateAtomizerFormProps extends Partial<ICreateDefaultFormProps> {
}

export const CreateAtomizerForm: FC<ICreateAtomizerFormProps> = ({onSuccess, ...props}) => {
	const {t} = useTranslation();
	const atomizersQueryInvalidate = useAtomizersQueryInvalidate();
	return <CreateDefaultForm
		layout={'vertical'}
		translation={'lab.atomizer'}
		onSuccess={response => {
			message.success(t("lab.atomizer.create.success", {data: response.response}));
			atomizersQueryInvalidate();
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
			field={'drawIds'}
		>
			<DrawSelect/>
		</FormItem>
		<Divider/>
		<Centered>
			<Submit icon={<AtomizerIcon/>} label={'create.submit'}/>
		</Centered>
	</CreateDefaultForm>
}
