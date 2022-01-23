import {FC} from "react";
import {CreateDefaultForm, ICreateDefaultFormProps} from "@/sdk/puff-smith/api/lab/mixture/endpoint";
import {Centered, DatePicker, FormItem, Submit} from "@leight-core/leight";
import {useTranslation} from "react-i18next";
import {Divider, InputNumber, message, Slider} from "antd";
import dayjs from "dayjs";
import {LiquidSelect, LiquidTooltip} from "@/puff-smith/site/lab/liquid";
import {BaseSelect, BaseTooltip} from "@/puff-smith/site/lab/base";
import {BoosterSelect, BoosterTooltip} from "@/puff-smith/site/lab/booster";

export interface ICreateMixtureFormProps extends Partial<ICreateDefaultFormProps> {
}

export const CreateMixtureForm: FC<ICreateMixtureFormProps> = props => {
	const {t} = useTranslation();
	return <CreateDefaultForm
		toForm={() => ({
			pg: 50,
			vg: 50,
			nicotine: 6,
			volume: 60,
			mixed: dayjs(),
		})}
		onSuccess={({navigate, response}) => {
			message.success(t("lab.mixture.created.message", {data: response}));
			navigate("/lab/mixture/list");
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
			required
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
			required
		>
			<InputNumber
				style={{width: '100%'}}
				min={0}
				max={100}
			/>
		</FormItem>
		<FormItem
			field={'vg'}
			labels={['lab.mixture.vg.label']}
			required
		>
			<InputNumber
				style={{width: '100%'}}
				min={0}
				max={100}
			/>
		</FormItem>
		<FormItem
			field={'nicotine'}
			labels={['lab.mixture.nicotine.label']}
			required
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
			<Submit label={'lab.mixture.create.submit'}/>
		</Centered>
	</CreateDefaultForm>;
}
