import {FC} from "react";
import {IRateDefaultFormProps, RateDefaultForm, usePlotQueryInvalidate, useVapeQueryInvalidate, useVapesQueryInvalidate} from "@/sdk/puff-smith/api/lab/vape/endpoint";
import {Card, Centered, FormItem, Submit} from "@leight-core/leight";
import {useTranslation} from "react-i18next";
import {Divider, message, Slider} from "antd";
import {VapeDto} from "@/sdk/puff-smith/vape/dto";
import {CommonRateInput, VapeIcon} from "@/puff-smith";

export interface IVapeRateFormProps extends Partial<IRateDefaultFormProps> {
	vape: VapeDto;
}

export const VapeRateForm: FC<IVapeRateFormProps> = ({vape, onSuccess, ...props}) => {
	const {t} = useTranslation();
	const vapesQueryInvalidate = useVapesQueryInvalidate();
	const vapeQueryInvalidate = useVapeQueryInvalidate();
	const plotQueryInvalidate = usePlotQueryInvalidate();
	return <RateDefaultForm
		toForm={() => vape}
		translation={'lab.vape'}
		layout={'vertical'}
		toMutation={values => ({
			id: vape.id,
			...values,
		})}
		onSuccess={response => {
			message.success(t('lab.vape.rate.update.success'));
			vapesQueryInvalidate();
			vapeQueryInvalidate();
			plotQueryInvalidate();
			onSuccess?.(response)
		}}
		{...props}
	>
		<Card title={t('lab.vape.common.title')}>
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
					max={240}
				/>
			</FormItem>
			<FormItem
				field={'airflow'}
				hasTooltip
			>
				<CommonRateInput/>
			</FormItem>
			<FormItem
				field={'juice'}
				hasTooltip
			>
				<CommonRateInput/>
			</FormItem>
		</Card>
		<Divider/>
		<Centered>
			<Submit icon={<VapeIcon/>} label={'rate.submit'}/>
		</Centered>
	</RateDefaultForm>
}
