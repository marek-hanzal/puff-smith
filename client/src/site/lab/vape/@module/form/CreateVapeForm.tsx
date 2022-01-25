import {FC} from "react";
import {CreateDefaultForm, ICreateDefaultFormProps} from "@/sdk/puff-smith/api/lab/vape/endpoint";
import {Card, Divider, InputNumber, message, Rate, Slider} from "antd";
import {Centered, FormItem, Submit} from "@leight-core/leight";
import {SetupSelect, SetupTooltip} from "@/puff-smith/site/lab/setup";
import {MixtureSelect, MixtureTooltip} from "@/puff-smith/site/lab/mixture";
import {DriptipSelect, DriptipTooltip} from "@/puff-smith/site/lab/driptip";
import {useTranslation} from "react-i18next";
import {VapeDto} from "@/sdk/puff-smith/vape/dto";

export interface ICreateVapeFormProps extends Partial<ICreateDefaultFormProps> {
	vape?: VapeDto;
}

export const CreateVapeForm: FC<ICreateVapeFormProps> = ({vape, ...props}) => {
	const {t} = useTranslation();
	return <CreateDefaultForm
		onSuccess={({navigate, response}) => {
			message.success(t("lab.vape.created.message", {data: response}));
			navigate("/lab/vape/list");
		}}
		toForm={() => ({
			rating: 5,
			taste: 5,
			airflow: 2,
			juice: 5,
			mtl: 5,
			dl: 0,
			clouds: 3,
			leaks: 0,
			dryhit: 0,
			...vape,
		})}
		{...props}
	>
		<Card title={t('lab.vape.common.title')}>
			<FormItem
				field={'setupId'}
				labels={['lab.vape.setupId.label']}
				required
				help={<SetupTooltip/>}
			>
				<SetupSelect/>
			</FormItem>
			<FormItem
				field={'mixtureId'}
				labels={['lab.vape.mixtureId.label']}
				required
				help={<MixtureTooltip/>}
			>
				<MixtureSelect/>
			</FormItem>
			<FormItem
				field={'driptipId'}
				labels={['lab.vape.driptipId.label']}
				help={<DriptipTooltip/>}
			>
				<DriptipSelect allowClear/>
			</FormItem>
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
		<Card title={t('lab.vape.settings.title')}>
			<FormItem
				field={'power'}
				labels={['lab.vape.power.label']}
				tooltip={t('lab.vape.power.label.tooltip')}
			>
				<InputNumber
					style={{width: '100%'}}
					min={0}
					max={1000}
				/>
			</FormItem>
			<FormItem
				field={'tc'}
				labels={['lab.vape.tc.label']}
				tooltip={t('lab.vape.tc.label.tooltip')}
			>
				<InputNumber
					style={{width: '100%'}}
					min={60}
					max={1000}
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
		<Centered>
			<Submit label={'lab.vape.create.submit'}/>
		</Centered>
	</CreateDefaultForm>;
}
