import {FC} from "react";
import {IRateDefaultFormProps, RateDefaultForm, usePlotQueryInvalidate, useVapesQueryInvalidate} from "@/sdk/puff-smith/api/lab/vape/endpoint";
import {Card, Centered, FormItem, Submit, useOptionalDrawerContext} from "@leight-core/leight";
import {useTranslation} from "react-i18next";
import {Divider, message, Rate} from "antd";
import {VapeDto} from "@/sdk/puff-smith/vape/dto";
import {VapeIcon} from "@/puff-smith";
import {AirflowInput, DryhitInput, JuiceInput, LeaksInput, PowerInput, TcInput} from "@/puff-smith/site/lab/vape";

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
			>
				<LeaksInput/>
			</FormItem>
			<FormItem
				field={'dryhit'}
				labels={['lab.vape.dryhit.label']}
				tooltip={t('lab.vape.dryhit.label.tooltip')}
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
			>
				<Rate
					count={10}
				/>
			</FormItem>
			<FormItem
				field={'taste'}
				labels={['lab.vape.taste.label']}
				tooltip={t('lab.vape.taste.label.tooltip')}
			>
				<Rate
					count={10}
				/>
			</FormItem>
		</Card>
		<Divider/>
		<Card title={t('lab.vape.vape.title')}>
			<FormItem
				field={'mtl'}
				labels={['lab.vape.mtl.label']}
				tooltip={t('lab.vape.mtl.label.tooltip')}
			>
				<Rate
					count={10}
				/>
			</FormItem>
			<FormItem
				field={'dl'}
				labels={['lab.vape.dl.label']}
				tooltip={t('lab.vape.dl.label.tooltip')}
			>
				<Rate
					count={10}
				/>
			</FormItem>
			<FormItem
				field={'clouds'}
				labels={['lab.vape.clouds.label']}
				tooltip={t('lab.vape.clouds.label.tooltip')}
			>
				<Rate
					count={10}
				/>
			</FormItem>
		</Card>
		<Divider/>
		<Card title={t('lab.vape.rating-advanced.title')}>
			<FormItem
				field={'throathit'}
				labels={['lab.vape.throathit.label']}
				tooltip={t('lab.vape.throathit.label.tooltip')}
			>
				<Rate
					count={10}
					allowClear
				/>
			</FormItem>
			<FormItem
				field={'complex'}
				labels={['lab.vape.complex.label']}
				tooltip={t('lab.vape.complex.label.tooltip')}
			>
				<Rate
					count={10}
					allowClear
				/>
			</FormItem>
			<FormItem
				field={'fruits'}
				labels={['lab.vape.fruits.label']}
				tooltip={t('lab.vape.fruits.label.tooltip')}
			>
				<Rate
					count={10}
					allowClear
				/>
			</FormItem>
			<FormItem
				field={'tobacco'}
				labels={['lab.vape.tobacco.label']}
				tooltip={t('lab.vape.tobacco.label.tooltip')}
			>
				<Rate
					count={10}
					allowClear
				/>
			</FormItem>
			<FormItem
				field={'cakes'}
				labels={['lab.vape.cakes.label']}
				tooltip={t('lab.vape.cakes.label.tooltip')}
			>
				<Rate
					count={10}
					allowClear
				/>
			</FormItem>
			<FormItem
				field={'fresh'}
				labels={['lab.vape.fresh.label']}
				tooltip={t('lab.vape.fresh.label.tooltip')}
			>
				<Rate
					count={10}
					allowClear
				/>
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
