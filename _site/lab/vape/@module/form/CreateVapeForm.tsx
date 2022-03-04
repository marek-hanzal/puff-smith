import {FC} from "react";
import {CreateDefaultForm, ICreateDefaultFormProps, useVapesQueryInvalidate} from "@/sdk/puff-smith/api/lab/vape/endpoint";
import {Divider, message} from "antd";
import {Centered, FormItem, Submit} from "@leight-core/common";
import {useTranslation} from "react-i18next";
import {VapeDto} from "@/sdk/puff-smith/vape/dto";
import {VapeIcon} from "@/puff-smith";
import {BuildSelect} from "../../../build/@module/form/BuildSelect";
import {MixtureSelect} from "../../../mixture/@module/form/MixtureSelect";
import {DriptipTooltip} from "../../../driptip/@module/form/DriptipTooltip";
import {DriptipSelect} from "../../../driptip/@module/form/DriptipSelect";
import {ModSelect} from "../../../mod/@module/form/ModSelect";

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
		})}
		{...props}
	>
		{exclude?.includes('buildId') ?
			<FormItem field={'buildId'} hidden/> :
			<FormItem
				field={'buildId'}
				required
			>
				<BuildSelect autoFocus/>
			</FormItem>
		}
		<FormItem
			field={'mixtureId'}
			required
		>
			<MixtureSelect autoFocus={exclude?.includes('buildId')}/>
		</FormItem>
		<FormItem
			field={'modId'}
			required
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