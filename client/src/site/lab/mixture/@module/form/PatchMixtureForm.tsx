import {FC} from "react";
import {IPatchDefaultFormProps, PatchDefaultForm} from "@/sdk/puff-smith/api/lab/mixture/endpoint";
import {MixtureDto} from "@/sdk/puff-smith/mixture/dto";
import {Divider, InputNumber, message, Slider} from "antd";
import {useTranslation} from "react-i18next";
import {LiquidSelect, LiquidTooltip} from "@/puff-smith/site/lab/liquid";
import {BaseSelect, BaseTooltip} from "@/puff-smith/site/lab/base";
import {BoosterSelect, BoosterTooltip} from "@/puff-smith/site/lab/booster";
import {asDayjs, Centered, DatePicker, FormItem, Submit} from "@leight-core/leight";

export interface IPatchMixtureFormProps extends Partial<IPatchDefaultFormProps> {
	mixture: MixtureDto;
}

export const PatchMixtureForm: FC<IPatchMixtureFormProps> = ({mixture, ...props}) => {
	const {t} = useTranslation();
	return <PatchDefaultForm
		toForm={() => ({
			...mixture,
			mixed: asDayjs(mixture.mixed),
			expires: asDayjs(mixture.expires),
		})}
		toMutation={values => ({
			...values,
			...{id: mixture.id}
		})}
		onSuccess={({navigate, response}) => {
			message.success(t("lab.mixture.update.success", {data: response}));
			navigate("/lab/mixture/[mixtureId]", {mixtureId: response.id});
		}}
		{...props}
	>
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
		<Divider/>
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
		<Divider/>
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
			<Slider
				marks={{
					0: 0,
					20: 20,
					30: 30,
					40: 40,
					50: 50,
					100: 100,
				}}
				min={0}
				max={100}
				step={1}
			/>
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
			<Slider
				marks={{
					0: 0,
					50: 50,
					60: 60,
					70: 70,
					80: 80,
					100: 100,
				}}
				min={0}
				max={100}
				step={1}
			/>
		</FormItem>
		<FormItem
			field={'nicotine'}
			labels={['lab.mixture.nicotine.label']}
		>
			<Slider
				marks={{
					0: 0,
					3: 3,
					6: 6,
					9: 9,
					12: 12,
					16: 16,
					18: 18,
					20: 20,
				}}
				min={0}
				max={20}
				step={1}
			/>
		</FormItem>
		<FormItem
			field={'volume'}
			labels={['lab.mixture.volume.label']}
			required
		>
			<InputNumber
				style={{width: '100%'}}
				min={0}
				max={1000}
			/>
		</FormItem>
		<Divider/>
		<FormItem
			field={'steep'}
			labels={['lab.mixture.steep.label']}
			tooltip={t('lab.mixture.steep.label.tooltip')}
		>
			<InputNumber
				style={{width: '100%'}}
				min={0}
				max={365}
			/>
		</FormItem>
		<FormItem
			field={'mixed'}
			labels={['lab.mixture.mixed.label']}
			required
		>
			<DatePicker size={'large'} style={{width: '100%'}}/>
		</FormItem>
		<FormItem
			field={'expires'}
			labels={['lab.mixture.expires.label']}
			tooltip={t('lab.mixture.expires.label.tooltip')}
		>
			<DatePicker size={'large'} style={{width: '100%'}}/>
		</FormItem>
		<Divider/>
		<Centered>
			<Submit label={'lab.mixture.update.submit'}/>
		</Centered>
	</PatchDefaultForm>
}
