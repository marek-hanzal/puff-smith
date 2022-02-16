import {FC} from "react";
import {IRateDefaultFormProps, RateDefaultForm, usePlotQueryInvalidate, useVapeQueryInvalidate, useVapesQueryInvalidate} from "@/sdk/puff-smith/api/lab/vape/endpoint";
import {Card, Centered, FormItem, Submit} from "@leight-core/leight";
import {useTranslation} from "react-i18next";
import {Divider, message} from "antd";
import {VapeDto} from "@/sdk/puff-smith/vape/dto";
import {CommonRateInput, VapeIcon} from "@/puff-smith";
import {PowerSlider} from "@/puff-smith/component/input/PowerSlider";
import {TcSlider} from "@/puff-smith/component/input/TcSlider";
import {AirflowInput} from "@/puff-smith/component/input/AirflowInput";
import {JuiceFlowInput} from "@/puff-smith/component/input/JuiceFlowInput";

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
		<Card title={'lab.vape.rating.title'}>
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
		<Card title={'lab.vape.rating-advanced.title'}>
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
		<Card title={'lab.vape.common.title'}>
			<FormItem
				field={'leaks'}
				hasTooltip
			>
				<CommonRateInput allowClear/>
			</FormItem>
			<FormItem
				field={'dryhit'}
				hasTooltip
			>
				<CommonRateInput allowClear/>
			</FormItem>
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
		<Card title={'lab.vape.settings.title'}>
			<FormItem
				field={'power'}
				hasTooltip
			>
				<PowerSlider/>
			</FormItem>
			<FormItem
				field={'tc'}
				hasTooltip
			>
				<TcSlider/>
			</FormItem>
			<FormItem
				field={'airflow'}
				hasTooltip
			>
				<AirflowInput/>
			</FormItem>
			<FormItem
				field={'juice'}
				hasTooltip
			>
				<JuiceFlowInput/>
			</FormItem>
		</Card>
		<Divider/>
		<Centered>
			<Submit icon={<VapeIcon/>} label={'rate.submit'}/>
		</Centered>
	</RateDefaultForm>
}
