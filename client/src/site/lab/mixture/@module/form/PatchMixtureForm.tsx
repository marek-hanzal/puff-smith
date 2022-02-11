import {FC} from "react";
import {IPatchDefaultFormProps, PatchDefaultForm, useMixturesQueryInvalidate} from "@/sdk/puff-smith/api/lab/mixture/endpoint";
import {MixtureDto} from "@/sdk/puff-smith/mixture/dto";
import {Divider, message} from "antd";
import {useTranslation} from "react-i18next";
import {LiquidSelect, LiquidTooltip} from "@/puff-smith/site/lab/liquid";
import {BaseSelect, BaseTooltip} from "@/puff-smith/site/lab/base";
import {BoosterSelect, BoosterTooltip} from "@/puff-smith/site/lab/booster";
import {asMoment, Card, Centered, DatePicker, FormItem, Submit, SwitchItem} from "@leight-core/leight";
import {NicotineSlider, PgSlider, SteepSlider, VgSlider, VolumeSlider} from "@/puff-smith/component/input";
import moment from "moment";
import {MixtureIcon} from "@/puff-smith";

export interface IPatchMixtureFormProps extends Partial<IPatchDefaultFormProps> {
	mixture: MixtureDto;
}

export const PatchMixtureForm: FC<IPatchMixtureFormProps> = ({mixture, ...props}) => {
	const {t} = useTranslation();
	const mixturesQueryInvalidate = useMixturesQueryInvalidate();
	return <PatchDefaultForm
		layout={'vertical'}
		toForm={() => ({
			...mixture,
			mixed: moment(mixture.mixed),
			expires: asMoment(mixture.expires),
		})}
		toMutation={values => ({
			...values,
			...{id: mixture.id}
		})}
		onSuccess={({response}) => {
			message.success(t("lab.mixture.update.success", {data: response}));
			mixturesQueryInvalidate();
		}}
		{...props}
	>
		<Card title={t('lab.mixture.common.label')}>
			<FormItem
				field={'code'}
				labels={'lab.mixture.code.label'}
				tooltip={t('lab.mixture.code.label.tooltip')}
			/>
			<FormItem
				field={'steep'}
				labels={'lab.mixture.steep.label'}
				tooltip={t('lab.mixture.steep.label.tooltip')}
			>
				<SteepSlider/>
			</FormItem>
			<FormItem
				field={'mixed'}
				labels={'lab.mixture.mixed.label'}
				required
			>
				<DatePicker showTime/>
			</FormItem>
			<SwitchItem
				field={'active'}
				labels={'lab.mixture.active.label'}
			/>
		</Card>
		<Divider/>
		<Card title={t('lab.mixture.mixture.label')}>
			<FormItem
				field={'liquidId'}
				labels={'lab.mixture.liquidId.label'}
				required
				help={<LiquidTooltip/>}
			>
				<LiquidSelect/>
			</FormItem>
			<FormItem
				field={'baseId'}
				labels={'lab.mixture.baseId.label'}
				help={<BaseTooltip/>}
			>
				<BaseSelect/>
			</FormItem>
			<FormItem
				field={'boosterId'}
				labels={'lab.mixture.boosterId.label'}
				help={<BoosterTooltip/>}
			>
				<BoosterSelect/>
			</FormItem>
			<FormItem
				field={'expires'}
				labels={'lab.mixture.expires.label'}
				tooltip={t('lab.mixture.expires.label.tooltip')}
			>
				<DatePicker picker={'month'} format={'MMMM YYYY'}/>
			</FormItem>
		</Card>
		<Divider/>
		<Card title={t('lab.mixture.content.label')}>
			<FormItem
				field={'pg'}
				labels={'lab.mixture.pg.label'}
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
				labels={'lab.mixture.vg.label'}
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
				labels={'lab.mixture.nicotine.label'}
			>
				<NicotineSlider/>
			</FormItem>
			<FormItem
				field={'volume'}
				labels={'lab.mixture.volume.label'}
				required
			>
				<VolumeSlider/>
			</FormItem>
		</Card>
		<Divider/>
		<Centered>
			<Submit
				icon={<MixtureIcon/>}
				label={'lab.mixture.update.submit'}
			/>
		</Centered>
	</PatchDefaultForm>
}
