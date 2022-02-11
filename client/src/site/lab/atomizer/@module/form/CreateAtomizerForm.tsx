import {CreateDefaultForm, ICreateDefaultFormProps, useAtomizersQueryInvalidate} from "@/sdk/puff-smith/api/lab/atomizer/endpoint";
import {FC} from "react";
import {Centered, FormItem, Submit} from "@leight-core/leight";
import {VendorSelect, VendorTooltip} from "@/puff-smith/site/lab/vendor";
import {Divider, message} from "antd";
import {AtomizerIcon} from "@/puff-smith";
import {useTranslation} from "react-i18next";

export interface ICreateAtomizerFormProps extends Partial<ICreateDefaultFormProps> {
}

export const CreateAtomizerForm: FC<ICreateAtomizerFormProps> = ({onSuccess, ...props}) => {
	const {t} = useTranslation();
	const atomizersQueryInvalidate = useAtomizersQueryInvalidate();
	return <CreateDefaultForm
		layout={'vertical'}
		onSuccess={response => {
			message.success(t("lab.atomizer.create.success", {data: response.response}));
			atomizersQueryInvalidate();
			onSuccess?.(response);
		}}
		{...props}
	>
		<FormItem
			field={'name'}
			labels={'lab.atomizer.name.label'}
			required
		/>
		<FormItem
			field={'vendorId'}
			labels={'lab.atomizer.vendorId.label'}
			required
			help={<VendorTooltip/>}
		>
			<VendorSelect/>
		</FormItem>
		<Divider/>
		<Centered>
			<Submit icon={<AtomizerIcon/>} label={'lab.atomizer.create.submit'}/>
		</Centered>
	</CreateDefaultForm>
}
