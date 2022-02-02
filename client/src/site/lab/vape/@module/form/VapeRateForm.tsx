import {FC} from "react";
import {IRateDefaultFormProps, RateDefaultForm, useVapesQueryInvalidate} from "@/sdk/puff-smith/api/lab/vape/endpoint";
import {Card} from "@leight-core/leight";
import {useTranslation} from "react-i18next";
import {Divider, message, Rate, Slider} from "antd";
import {Centered, FormItem, Submit, useOptionalDrawerContext} from "@leight-core/leight/dist";
import {VapeDto} from "@/sdk/puff-smith/vape/dto";
import {VapeIcon} from "@/puff-smith";

export interface IVapeRateFormProps extends Partial<IRateDefaultFormProps> {
	vape: VapeDto;
}

export const VapeRateForm: FC<IVapeRateFormProps> = ({vape, ...props}) => {
	const {t} = useTranslation();
	const drawerContext = useOptionalDrawerContext();
	const vapesQueryInvalidate = useVapesQueryInvalidate();
	return <RateDefaultForm
		toForm={() => ({
			...vape,
		})}
		toMutation={values => ({
			id: vape.id,
			...values,
		})}
		onSuccess={() => {
			message.success(t('lab.vape.rate.update.success'));
			drawerContext && drawerContext.setVisible(false);
			vapesQueryInvalidate();
		}}
		{...props}
	>
		<Card title={t('lab.vape.common.title')}>
			<FormItem
				field={'leaks'}
				labels={['lab.vape.leaks.label']}
				tooltip={t('lab.vape.leaks.label.tooltip')}
			>
				<Slider
					marks={{
						"0": 0,
						"1": 1,
						"2": 2,
						"3": 3,
						"4": 4,
						"5": 5,
					}}
					min={0}
					max={5}
				/>
			</FormItem>
			<FormItem
				field={'dryhit'}
				labels={['lab.vape.dryhit.label']}
				tooltip={t('lab.vape.dryhit.label.tooltip')}
			>
				<Slider
					marks={{
						"0": 0,
						"1": 1,
						"2": 2,
						"3": 3,
						"4": 4,
						"5": 5,
					}}
					min={0}
					max={5}
				/>
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
				<Slider
					marks={{
						0: 0,
						20: 20,
						40: 40,
						60: 60,
						100: 100,
					}}
					min={0}
					max={100}
				/>
			</FormItem>
			<FormItem
				field={'tc'}
				labels={['lab.vape.tc.label']}
				tooltip={t('lab.vape.tc.label.tooltip')}
			>
				<Slider
					marks={{
						0: 0,
						80: 80,
						120: 120,
						200: 200,
						320: 320,
					}}
					min={0}
					max={320}
				/>
			</FormItem>
			<FormItem
				field={'airflow'}
				labels={['lab.vape.airflow.label']}
				tooltip={t('lab.vape.airflow.label.tooltip')}
			>
				<Slider
					marks={{
						"0": 0,
						"1": 1,
						"2": 2,
						"3": 3,
						"4": 4,
						"5": 5,
					}}
					min={0}
					max={5}
				/>
			</FormItem>
			<FormItem
				field={'juice'}
				labels={['lab.vape.juice.label']}
				tooltip={t('lab.vape.juice.label.tooltip')}
			>
				<Slider
					marks={{
						"0": 0,
						"1": 1,
						"2": 2,
						"3": 3,
						"4": 4,
						"5": 5,
					}}
					min={0}
					max={5}
				/>
			</FormItem>
		</Card>
		<Centered>
			<Submit icon={<VapeIcon/>} label={'lab.vape.rate.submit'}/>
		</Centered>
	</RateDefaultForm>
}
