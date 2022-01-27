import {FC} from "react";
import {CreateDefaultForm, ICreateDefaultFormProps} from "@/sdk/puff-smith/api/lab/mixture/endpoint";
import {Card, Centered, DatePicker, FormItem, Submit} from "@leight-core/leight";
import {useTranslation} from "react-i18next";
import {Divider, message} from "antd";
import {LiquidSelect, LiquidTooltip} from "@/puff-smith/site/lab/liquid";
import {BaseSelect, BaseTooltip} from "@/puff-smith/site/lab/base";
import {BoosterSelect, BoosterTooltip} from "@/puff-smith/site/lab/booster";
import {NicotineSlider, PgSlider, SteepSlider, VgSlider, VolumeSlider} from "@/puff-smith/component/input";
import moment from "moment";

export interface ICreateMixtureFormProps extends Partial<ICreateDefaultFormProps> {
}

export const CreateMixtureForm: FC<ICreateMixtureFormProps> = props => {
	const {t} = useTranslation();
	return <CreateDefaultForm
		toForm={() => ({
			pg: 30,
			vg: 70,
			nicotine: 6,
			volume: 60,
			steep: 14,
			mixed: moment(),
		})}
		onSuccess={({navigate, response}) => {
			message.success(t("lab.mixture.created.message", {data: response}));
			navigate("/lab/mixture/list");
		}}
		toError={({error}) => ({
			"Duplicate entry [z_mixture_code_unique] of [z_mixture].": {id: ["code"], error},
		})}
		{...props}
	>
		<Card title={t('lab.mixture.common.label')}>
			<FormItem
				field={'name'}
				labels={['lab.mixture.name.label']}
				required
			/>
			<FormItem
				field={'code'}
				labels={['lab.mixture.code.label']}
				tooltip={t('lab.mixture.code.label.tooltip')}
			/>
			<FormItem
				field={'steep'}
				labels={['lab.mixture.steep.label']}
				tooltip={t('lab.mixture.steep.label.tooltip')}
			>
				<SteepSlider/>
			</FormItem>
			<FormItem
				field={'mixed'}
				labels={['lab.mixture.mixed.label']}
				required
			>
				<DatePicker showTime/>
			</FormItem>
		</Card>
		<Divider/>
		<Card title={t('lab.mixture.mixture.label')}>
			<FormItem
				field={'liquidId'}
				labels={['lab.mixture.liquidId.label']}
				required
				help={<LiquidTooltip/>}
			>
				<LiquidSelect/>
			</FormItem>
			<FormItem
				field={'baseId'}
				labels={['lab.mixture.baseId.label']}
				help={<BaseTooltip/>}
			>
				<BaseSelect/>
			</FormItem>
			<FormItem
				field={'boosterId'}
				labels={['lab.mixture.boosterId.label']}
				help={<BoosterTooltip/>}
			>
				<BoosterSelect/>
			</FormItem>
			<FormItem
				field={'expires'}
				labels={['lab.mixture.expires.label']}
				tooltip={t('lab.mixture.expires.label.tooltip')}
			>
				<DatePicker picker={'month'}/>
			</FormItem>
		</Card>
		<Divider/>
		<Card title={t('lab.mixture.content.label')}>
			<FormItem
				field={'pg'}
				labels={['lab.mixture.pg.label']}
				rules={[
					({setFieldsValue}) => ({
						validator(_, value) {
							setFieldsValue({
								'vg': 100 - value,
							});
							return Promise.resolve();
						},
					}),
				]}
			>
				<PgSlider/>
			</FormItem>
			<FormItem
				field={'vg'}
				labels={['lab.mixture.vg.label']}
				rules={[
					({setFieldsValue}) => ({
						validator(_, value) {
							setFieldsValue({
								'pg': 100 - value,
							});
							return Promise.resolve();
						},
					}),
				]}
			>
				<VgSlider/>
			</FormItem>
			<FormItem
				field={'nicotine'}
				labels={['lab.mixture.nicotine.label']}
			>
				<NicotineSlider/>
			</FormItem>
			<FormItem
				field={'volume'}
				labels={['lab.mixture.volume.label']}
				required
			>
				<VolumeSlider/>
			</FormItem>
		</Card>
		<Divider/>
		<Centered>
			<Submit label={'lab.mixture.create.submit'}/>
		</Centered>
	</CreateDefaultForm>;
}
