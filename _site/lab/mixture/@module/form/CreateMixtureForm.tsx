import {FC} from "react";
import {CreateDefaultForm, ICreateDefaultFormProps, useMixturesQueryInvalidate} from "@/sdk/puff-smith/api/lab/mixture/endpoint";
import {Card, Centered, DatePicker, FormItem, Submit} from "@leight-core/common";
import {useTranslation} from "react-i18next";
import {message} from "antd";
import {NicotineSlider, PgSlider, SteepSlider, VgSlider, VolumeSlider} from "@/puff-smith/component/input";
import moment from "moment";
import {MixtureIcon} from "@/puff-smith";
import {LiquidTooltip} from "../../../liquid/@module/form/LiquidTooltip";
import {LiquidSelect} from "../../../liquid/@module/form/LiquidSelect";
import {BaseTooltip} from "../../../base/@module/form/BaseTooltip";
import {BaseSelect} from "../../../base/@module/form/BaseSelect";
import {BoosterTooltip} from "../../../booster/@module/form/BoosterTooltip";
import {BoosterSelect} from "../../../booster/@module/form/BoosterSelect";

export interface ICreateMixtureFormProps extends Partial<ICreateDefaultFormProps> {
}

export const CreateMixtureForm: FC<ICreateMixtureFormProps> = ({onSuccess, ...props}) => {
	const {t} = useTranslation();
	const mixturesQueryInvalidate = useMixturesQueryInvalidate();
	return <CreateDefaultForm
		layout={'vertical'}
		translation={'lab.mixture'}
		toForm={() => ({
			pg: 30,
			vg: 70,
			nicotine: 0,
			volume: 60,
			steep: 14,
			mixed: moment(),
		})}
		onSuccess={response => {
			message.success(t("lab.mixture.created.message", {data: response.response}));
			mixturesQueryInvalidate();
			onSuccess?.(response);
		}}
		toError={({error}) => ({
			"Duplicate entry [z_mixture_code_unique] of [z_mixture].": {id: ["code"], error},
		})}
		{...props}
	>
		<Card title={'lab.mixture.common.label'}>
			<FormItem
				field={'liquidId'}
				required
				help={<LiquidTooltip/>}
			>
				<LiquidSelect autoFocus/>
			</FormItem>
			<FormItem
				field={'steep'}
				hasTooltip
			>
				<SteepSlider/>
			</FormItem>
			<FormItem
				field={'code'}
				hasTooltip
			/>
			<FormItem
				field={'mixed'}
				required
			>
				<DatePicker showTime/>
			</FormItem>
		</Card>
		<Card title={'lab.mixture.mixture.label'}>
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
				<DatePicker picker={'month'}/>
			</FormItem>
		</Card>
		<Card title={'lab.mixture.content.label'}>
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
		<Centered>
			<Submit icon={<MixtureIcon/>} label={'create.submit'}/>
		</Centered>
	</CreateDefaultForm>;
}
