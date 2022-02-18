import {FC} from "react";
import {IRateDefaultFormProps, RateDefaultForm, usePlotQueryInvalidate, useVapeQueryInvalidate, useVapesQueryInvalidate} from "@/sdk/puff-smith/api/lab/vape/endpoint";
import {Card, Centered, FormItem, Submit} from "@leight-core/leight";
import {useTranslation} from "react-i18next";
import {Col, Divider, message, Row} from "antd";
import {VapeDto} from "@/sdk/puff-smith/vape/dto";
import {CommonRateInput, VapeIcon} from "@/puff-smith";
import {PowerSlider} from "@/puff-smith/component/input/PowerSlider";
import {TcSlider} from "@/puff-smith/component/input/TcSlider";

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
		<Card title={'lab.vape.common.title'}>
			<Centered>
				<FormItem
					field={'rating'}
					hasTooltip
					required
				>
					<CommonRateInput/>
				</FormItem>
			</Centered>
			<Divider/>
			<Row>
				<Col span={11}>
					<FormItem
						field={'power'}
						hasTooltip
					>
						<PowerSlider/>
					</FormItem>
				</Col>
				<Col span={2}/>
				<Col span={11}>
					<FormItem
						field={'tc'}
						hasTooltip
					>
						<TcSlider disabled={!vape.build.coil.wire.tc}/>
					</FormItem>
				</Col>
			</Row>
		</Card>
		<Card title={'lab.vape.rating-advanced.title'}>
			<Row>
				<Col span={12}>
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
				</Col>
				<Col span={12}>
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
				</Col>
			</Row>
		</Card>
		<Centered>
			<Submit icon={<VapeIcon/>} label={'rate.submit'}/>
		</Centered>
	</RateDefaultForm>
}
