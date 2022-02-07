import {IPatchDefaultFormProps, PatchDefaultForm} from "@/sdk/puff-smith/api/lab/atomizer/endpoint";
import {FC} from "react";
import {Centered, FormItem, Submit} from "@leight-core/leight";
import {Divider, message} from "antd";
import {useTranslation} from "react-i18next";
import {AtomizerDto} from "@/sdk/puff-smith/atomizer/dto";
import {AtomizerIcon} from "@/puff-smith";
import {VendorSelect, VendorTooltip} from "@/puff-smith/site/lab/vendor";

export interface IPatchAtomizerFormProps extends Partial<IPatchDefaultFormProps> {
	atomizer: AtomizerDto;
}

export const PatchAtomizerForm: FC<IPatchAtomizerFormProps> = ({atomizer, ...props}) => {
	const {t} = useTranslation();
	return <PatchDefaultForm
		layout={'vertical'}
		onSuccess={({navigate, response}) => {
			message.success(t("lab.atomizer.update.message", {data: response}));
			navigate("/lab/atomizer/[atomizerId]", {atomizerId: response.id});
		}}
		toForm={() => ({
			...atomizer,
		})}
		toMutation={values => ({
			...values,
			...{id: atomizer.id}
		})}
		{...props}
	>
		<FormItem field={'name'} labels={['lab.atomizer.name.label']} required/>
		<FormItem
			field={'vendorId'}
			labels={['lab.atomizer.vendorId.label']}
			required
			help={<VendorTooltip/>}
		>
			<VendorSelect/>
		</FormItem>
		<Divider/>
		<Centered>
			<Submit icon={<AtomizerIcon/>} label={'lab.atomizer.update.submit'}/>
		</Centered>
	</PatchDefaultForm>
}
