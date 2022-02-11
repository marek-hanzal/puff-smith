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

export const PatchMixtureForm: FC<IPatchMixtureFormProps> = ({mixture, onSuccess, ...props}) => {
	const {t} = useTranslation();
	const mixturesQueryInvalidate = useMixturesQueryInvalidate();
	return <PatchDefaultForm
		layout={'vertical'}
		translation={'lab.mixture'}
		toForm={() => ({
			...mixture,
			mixed: moment(mixture.mixed),
			expires: asMoment(mixture.expires),
		})}
		toMutation={values => ({
			...values,
			...{id: mixture.id}
		})}
		onSuccess={response => {
			message.success(t("lab.mixture.update.success", {data: response.response}));
			mixturesQueryInvalidate();
			onSuccess?.(response);
		}}
		{...props}
	>
		<Card title={t('lab.mixture.common.label')}>
			<FormItem
				field={'code'}
				hasTooltip
			/>
			<FormItem
				field={'steep'}
				hasTooltip
			>
				<SteepSlider/>
			</FormItem>
			<FormItem
				field={'mixed'}
				required
			>
				<DatePicker showTime/>
			</FormItem>
			<SwitchItem
				field={'active'}
			/>
		</Card>
		<Divider/>
		<Card title={t('lab.mixture.mixture.label')}>
			<FormItem
				field={'liquidId'}
				required
				help={<LiquidTooltip/>}
			>
				<LiquidSelect/>
			</FormItem>
			<FormItem
				field={'baseId'}
				help={<BaseTooltip/>}
			>
				<BaseSelect/>
			</FormItem>
			<FormItem
				field={'boosterId'}
				help={<BoosterTooltip/>}
			>
				<BoosterSelect/>
			</FormItem>
			<FormItem
				field={'expires'}
				hasTooltip
			>
				<DatePicker picker={'month'} format={'MMMM YYYY'}/>
			</FormItem>
		</Card>
		<Divider/>
		<Card title={t('lab.mixture.content.label')}>
			<FormItem
				field={'pg'}
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
			>
				<NicotineSlider/>
			</FormItem>
			<FormItem
				field={'volume'}
				required
			>
				<VolumeSlider/>
			</FormItem>
		</Card>
		<Divider/>
		<Centered>
			<Submit
				icon={<MixtureIcon/>}
				label={'update.submit'}
			/>
		</Centered>
	</PatchDefaultForm>
}
