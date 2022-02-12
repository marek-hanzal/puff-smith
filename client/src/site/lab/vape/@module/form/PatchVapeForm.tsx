import {FC} from "react";
import {IPatchDefaultFormProps, PatchDefaultForm, useVapeQueryInvalidate, useVapesQueryInvalidate} from "@/sdk/puff-smith/api/lab/vape/endpoint";
import {VapeDto} from "@/sdk/puff-smith/vape/dto";
import {Divider, message, Slider} from "antd";
import {useTranslation} from "react-i18next";
import {Card, Centered, FormItem, Submit} from "@leight-core/leight";
import {ModSelect, ModTooltip} from "@/puff-smith/site/lab/mod";
import {CommonRateInput, VapeIcon} from "@/puff-smith";
import {BuildTooltip} from "@/puff-smith/site/lab/build/@module/form/BuildTooltip";
import {BuildSelect} from "@/puff-smith/site/lab/build/@module/form/BuildSelect";
import {MixtureTooltip} from "@/puff-smith/site/lab/mixture/@module/form/MixtureTooltip";
import {MixtureSelect} from "@/puff-smith/site/lab/mixture/@module/form/MixtureSelect";
import {DriptipTooltip} from "@/puff-smith/site/lab/driptip/@module/form/DriptipTooltip";
import {DriptipSelect} from "@/puff-smith/site/lab/driptip/@module/form/DriptipSelect";

export interface IPatchVapeFormProps extends Partial<IPatchDefaultFormProps> {
	vape: VapeDto;
}

export const PatchVapeForm: FC<IPatchVapeFormProps> = ({vape, onSuccess, ...props}) => {
	const {t} = useTranslation();
	const vapeQueryInvalidate = useVapeQueryInvalidate();
	const vapesQueryInvalidate = useVapesQueryInvalidate();
	return <PatchDefaultForm
		translation={'lab.vape'}
		toForm={() => ({
			...vape,
		})}
		toMutation={values => ({
			...values,
			...{id: vape.id}
		})}
		onSuccess={response => {
			message.success(t("lab.vape.update.success", {data: response.response}));
			vapeQueryInvalidate();
			vapesQueryInvalidate();
			onSuccess?.(response);
		}}
		{...props}
	>
		<Card title={t('lab.vape.common.title')}>
			<FormItem
				field={'buildId'}
				required
				help={<BuildTooltip/>}
			>
				<BuildSelect/>
			</FormItem>
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
			<FormItem
				field={'leaks'}
				hasTooltip
				required
			>
				<CommonRateInput/>
			</FormItem>
			<FormItem
				field={'dryhit'}
				hasTooltip
				required
			>
				<CommonRateInput/>
			</FormItem>
		</Card>
		<Divider/>
		<Card title={t('lab.vape.rating.title')}>
			<FormItem
				field={'rating'}
				hasTooltip
				required
			>
				<CommonRateInput/>
			</FormItem>
			<FormItem
				field={'taste'}
				hasTooltip
				required
			>
				<CommonRateInput/>
			</FormItem>
		</Card>
		<Divider/>
		<Card title={t('lab.vape.settings.title')}>
			<FormItem
				field={'power'}
				hasTooltip
			>
				<Slider
					marks={{
						0: 0,
						20: 20,
						40: 40,
						60: 60,
						80: 80,
					}}
					min={0}
					max={80}
					step={0.5}
				/>
			</FormItem>
			<FormItem
				field={'tc'}
				hasTooltip
			>
				<Slider
					marks={{
						0: 0,
						80: 80,
						120: 120,
						200: 200,
						240: 240,
					}}
					min={0}
					max={0}
				/>
			</FormItem>
			<FormItem
				field={'airflow'}
				hasTooltip
				required
			>
				<CommonRateInput/>
			</FormItem>
			<FormItem
				field={'juice'}
				hasTooltip
				required
			>
				<CommonRateInput/>
			</FormItem>
		</Card>
		<Divider/>
		<Card title={t('lab.vape.vape.title')}>
			<FormItem
				field={'mtl'}
				hasTooltip
			>
				<CommonRateInput allowClear/>
			</FormItem>
			<FormItem
				field={'dl'}
				hasTooltip
			>
				<CommonRateInput allowClear/>
			</FormItem>
			<FormItem
				field={'clouds'}
				hasTooltip
			>
				<CommonRateInput allowClear/>
			</FormItem>
		</Card>
		<Divider/>
		<Card title={t('lab.vape.rating-advanced.title')}>
			<FormItem
				field={'throathit'}
				hasTooltip
			>
				<CommonRateInput allowClear/>
			</FormItem>
			<FormItem
				field={'complex'}
				hasTooltip
			>
				<CommonRateInput allowClear/>
			</FormItem>
			<FormItem
				field={'fruits'}
				hasTooltip
			>
				<CommonRateInput allowClear/>
			</FormItem>
			<FormItem
				field={'tobacco'}
				hasTooltip
			>
				<CommonRateInput allowClear/>
			</FormItem>
			<FormItem
				field={'cakes'}
				hasTooltip
			>
				<CommonRateInput allowClear/>
			</FormItem>
			<FormItem
				field={'fresh'}
				hasTooltip
			>
				<CommonRateInput allowClear/>
			</FormItem>
		</Card>
		<Divider/>
		<Centered>
			<Submit icon={<VapeIcon/>} label={'update.submit'}/>
		</Centered>
	</PatchDefaultForm>
}
