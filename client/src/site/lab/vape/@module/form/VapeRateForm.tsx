import {FC} from "react";
import {IRateDefaultFormProps, RateDefaultForm, usePlotQueryInvalidate, useVapesQueryInvalidate} from "@/sdk/puff-smith/api/lab/vape/endpoint";
import {Card, Centered, FormItem, Submit, useOptionalDrawerContext} from "@leight-core/leight";
import {useTranslation} from "react-i18next";
import {Divider, message} from "antd";
import {VapeDto} from "@/sdk/puff-smith/vape/dto";
import {CommonRateInput, VapeIcon} from "@/puff-smith";
import {AirflowInput, CloudsInput, DryhitInput, FreshInput, JuiceInput, LeaksInput, PowerInput, TcInput, ThroathitInput} from "@/puff-smith/site/lab/vape";

export interface IVapeRateFormProps extends Partial<IRateDefaultFormProps> {
	vape: VapeDto;
}

export const VapeRateForm: FC<IVapeRateFormProps> = ({vape, ...props}) => {
	const {t} = useTranslation();
	const drawerContext = useOptionalDrawerContext();
	const vapesQueryInvalidate = useVapesQueryInvalidate();
	const plotQueryInvalidate = usePlotQueryInvalidate()
	return <RateDefaultForm
		toForm={() => vape}
		layout={'vertical'}
		toMutation={values => ({
			id: vape.id,
			...values,
		})}
		onSuccess={() => {
			message.success(t('lab.vape.rate.update.success'));
			drawerContext && drawerContext.setVisible(false);
			vapesQueryInvalidate();
			plotQueryInvalidate();
		}}
		{...props}
	>
		<Card title={t('lab.vape.common.title')}>
			<FormItem
				field={'leaks'}
				labels={['lab.vape.leaks.label']}
				tooltip={t('lab.vape.leaks.label.tooltip')}
				required
			>
				<LeaksInput/>
			</FormItem>
			<FormItem
				field={'dryhit'}
				labels={['lab.vape.dryhit.label']}
				tooltip={t('lab.vape.dryhit.label.tooltip')}
				required
			>
				<DryhitInput/>
			</FormItem>
		</Card>
		<Divider/>
		<Card title={t('lab.vape.rating.title')}>
			<FormItem
				field={'rating'}
				labels={['lab.vape.rating.label']}
				tooltip={t('lab.vape.rating.label.tooltip')}
				required
			>
				<CommonRateInput/>
			</FormItem>
			<FormItem
				field={'taste'}
				labels={['lab.vape.taste.label']}
				tooltip={t('lab.vape.taste.label.tooltip')}
				required
			>
				<CommonRateInput/>
			</FormItem>
		</Card>
		<Divider/>
		<Card title={t('lab.vape.vape.title')}>
			<FormItem
				field={'mtl'}
				labels={['lab.vape.mtl.label']}
				tooltip={t('lab.vape.mtl.label.tooltip')}
			>
				<CommonRateInput/>
			</FormItem>
			<FormItem
				field={'dl'}
				labels={['lab.vape.dl.label']}
				tooltip={t('lab.vape.dl.label.tooltip')}
			>
				<CommonRateInput/>
			</FormItem>
			<FormItem
				field={'clouds'}
				labels={['lab.vape.clouds.label']}
				tooltip={t('lab.vape.clouds.label.tooltip')}
				required
			>
				<CloudsInput/>
			</FormItem>
		</Card>
		<Divider/>
		<Card title={t('lab.vape.rating-advanced.title')}>
			<FormItem
				field={'throathit'}
				labels={['lab.vape.throathit.label']}
				tooltip={t('lab.vape.throathit.label.tooltip')}
			>
				<ThroathitInput allowClear/>
			</FormItem>
			<FormItem
				field={'complex'}
				labels={['lab.vape.complex.label']}
				tooltip={t('lab.vape.complex.label.tooltip')}
			>
				<CommonRateInput allowClear/>
			</FormItem>
			<FormItem
				field={'fruits'}
				labels={['lab.vape.fruits.label']}
				tooltip={t('lab.vape.fruits.label.tooltip')}
			>
				<CommonRateInput allowClear/>
			</FormItem>
			<FormItem
				field={'tobacco'}
				labels={['lab.vape.tobacco.label']}
				tooltip={t('lab.vape.tobacco.label.tooltip')}
			>
				<CommonRateInput allowClear/>
			</FormItem>
			<FormItem
				field={'cakes'}
				labels={['lab.vape.cakes.label']}
				tooltip={t('lab.vape.cakes.label.tooltip')}
			>
				<CommonRateInput allowClear/>
			</FormItem>
			<FormItem
				field={'fresh'}
				labels={['lab.vape.fresh.label']}
				tooltip={t('lab.vape.fresh.label.tooltip')}
			>
				<FreshInput allowClear/>
			</FormItem>
		</Card>
		<Divider/>
		<Card title={t('lab.vape.settings.title')}>
			<FormItem
				field={'power'}
				labels={['lab.vape.power.label']}
				tooltip={t('lab.vape.power.label.tooltip')}
			>
				<PowerInput/>
			</FormItem>
			<FormItem
				field={'tc'}
				labels={['lab.vape.tc.label']}
				tooltip={t('lab.vape.tc.label.tooltip')}
			>
				<TcInput/>
			</FormItem>
			<FormItem
				field={'airflow'}
				labels={['lab.vape.airflow.label']}
				tooltip={t('lab.vape.airflow.label.tooltip')}
			>
				<AirflowInput/>
			</FormItem>
			<FormItem
				field={'juice'}
				labels={['lab.vape.juice.label']}
				tooltip={t('lab.vape.juice.label.tooltip')}
			>
				<JuiceInput/>
			</FormItem>
		</Card>
		<Divider/>
		<Centered>
			<Submit icon={<VapeIcon/>} label={'lab.vape.rate.submit'}/>
		</Centered>
	</RateDefaultForm>
}
