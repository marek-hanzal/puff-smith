import {FC} from "react";
import {IPatchDefaultFormProps, PatchDefaultForm} from "@/sdk/puff-smith/api/lab/vape/endpoint";
import {VapeDto} from "@/sdk/puff-smith/vape/dto";
import {Divider, message, Rate, Slider} from "antd";
import {useTranslation} from "react-i18next";
import {Card, Centered, FormItem, Submit} from "@leight-core/leight";
import {MixtureSelect, MixtureTooltip} from "@/puff-smith/site/lab/mixture";
import {DriptipSelect, DriptipTooltip} from "@/puff-smith/site/lab/driptip";
import {BuildSelect, BuildTooltip} from "@/puff-smith/site/lab/build";
import {ModSelect, ModTooltip} from "@/puff-smith/site/lab/mod";

export interface IPatchVapeFormProps extends Partial<IPatchDefaultFormProps> {
	vape: VapeDto;
}

export const PatchVapeForm: FC<IPatchVapeFormProps> = ({vape, ...props}) => {
	const {t} = useTranslation();
	return <PatchDefaultForm
		toForm={() => ({
			...vape,
		})}
		toMutation={values => ({
			...values,
			...{id: vape.id}
		})}
		onSuccess={({navigate, response}) => {
			message.success(t("lab.vape.update.success", {data: response}));
			navigate("/lab/vape/[vapeId]", {vapeId: response.id});
		}}
		{...props}
	>
		<Card title={t('lab.vape.common.title')}>
			<FormItem
				field={'vapeId'}
				labels={['lab.vape.vapeId.label']}
				required
				help={<BuildTooltip/>}
			>
				<BuildSelect/>
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
				field={'modId'}
				labels={['lab.vape.modId.label']}
				required
				help={<ModTooltip/>}
			>
				<ModSelect/>
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
				<Slider
					marks={{
						0: 0,
						20: 20,
						40: 40,
						60: 60,
						100: 100,
						250: 250,
					}}
					min={0}
					max={250}
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
		<Centered>
			<Submit label={'lab.vape.update.submit'}/>
		</Centered>
	</PatchDefaultForm>
}
