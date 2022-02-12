import {FC} from "react";
import {CreateDefaultForm, ICreateDefaultFormProps, useVapesQueryInvalidate} from "@/sdk/puff-smith/api/lab/vape/endpoint";
import {Divider, message} from "antd";
import {Centered, FormItem, Submit} from "@leight-core/leight";
import {DriptipSelect, DriptipTooltip} from "@/puff-smith/site/lab/driptip";
import {useTranslation} from "react-i18next";
import {VapeDto} from "@/sdk/puff-smith/vape/dto";
import {ModSelect, ModTooltip} from "@/puff-smith/site/lab/mod";
import {VapeIcon} from "@/puff-smith";
import {BuildTooltip} from "@/puff-smith/site/lab/build/@module/form/BuildTooltip";
import {BuildSelect} from "@/puff-smith/site/lab/build/@module/form/BuildSelect";
import {MixtureTooltip} from "@/puff-smith/site/lab/mixture/@module/form/MixtureTooltip";
import {MixtureSelect} from "@/puff-smith/site/lab/mixture/@module/form/MixtureSelect";

export interface ICreateVapeFormProps extends Partial<ICreateDefaultFormProps> {
	vape?: Partial<VapeDto>;
	exclude?: string[];
}

export const CreateVapeForm: FC<ICreateVapeFormProps> = ({vape, exclude = [], onSuccess, ...props}) => {
	const {t} = useTranslation();
	const vapesQueryInvalidate = useVapesQueryInvalidate();
	return <CreateDefaultForm
		layout={'vertical'}
		translation={'lab.vape'}
		onSuccess={response => {
			message.success(t("lab.vape.created.message", {data: response.response}));
			vapesQueryInvalidate();
			onSuccess?.(response);
		}}
		toForm={() => vape}
		toMutation={values => ({
			...values,
			rating: 0,
			taste: 0,
			airflow: 10,
			juice: 10,
			clouds: 0,
			leaks: 0,
			dryhit: 0,
		})}
		{...props}
	>
		{exclude?.includes('buildId') ?
			<FormItem field={'buildId'} hidden/> :
			<FormItem
				field={'buildId'}
				required
				help={<BuildTooltip/>}
			>
				<BuildSelect/>
			</FormItem>
		}
		<FormItem
			field={'mixtureId'}
			required
			help={<MixtureTooltip/>}
		>
			<MixtureSelect/>
		</FormItem>
		<FormItem
			field={'modId'}
			required
			help={<ModTooltip/>}
		>
			<ModSelect/>
		</FormItem>
		<FormItem
			field={'driptipId'}
			help={<DriptipTooltip/>}
		>
			<DriptipSelect allowClear/>
		</FormItem>
		<Divider/>
		<Centered>
			<Submit icon={<VapeIcon/>} label={'create.submit'}/>
		</Centered>
	</CreateDefaultForm>;
}
