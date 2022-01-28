import {IPatchDefaultFormProps, PatchDefaultForm} from "@/sdk/puff-smith/api/lab/build/endpoint";
import {BuildDto} from "@/sdk/puff-smith/build/dto";
import {FC} from "react";
import {Divider, InputNumber, message, Slider} from "antd";
import {useTranslation} from "react-i18next";
import {AtomizerSelect, AtomizerTooltip} from "@/puff-smith/site/lab/atomizer";
import {CoilSelect, CoilTooltip} from "@/puff-smith/site/lab/coil";
import {CottonSelect, CottonTooltip} from "@/puff-smith/site/lab/cotton";
import {Card, Centered, DatePicker, FormItem, Submit, SwitchItem, TextArea} from "@leight-core/leight";
import moment from "moment";

export interface IPatchBuildFormProps extends Partial<IPatchDefaultFormProps> {
	build: BuildDto;
}

export const PatchBuildForm: FC<IPatchBuildFormProps> = ({build, ...props}) => {
	const {t} = useTranslation();
	return <PatchDefaultForm
		toForm={() => ({
			...build,
			created: moment(build.created),
		})}
		toMutation={values => ({
			...values,
			...{id: build.id}
		})}
		onSuccess={({navigate, response}) => {
			message.success(t("lab.build.update.success", {data: response}));
			navigate("/lab/build/[buildId]", {buildId: response.id});
		}}
		{...props}
	>
		<Card title={t('lab.build.common.title')}>
			<FormItem field={'name'} labels={['lab.build.name.label']} tooltip={t('lab.build.name.label.tooltip')} required/>
			<FormItem
				field={'description'}
				labels={['lab.build.description.label']}
			>
				<TextArea autoSize={{minRows: 4, maxRows: 4}}/>
			</FormItem>
			<FormItem
				field={'created'}
				labels={['lab.build.created.label']}
			>
				<DatePicker showTime/>
			</FormItem>
			<SwitchItem
				field={'active'}
				labels={['lab.build.active.label']}
				tooltip={t('lab.build.active.label.tooltip')}
			/>
		</Card>
		<Divider/>
		<Card title={t('lab.build.build.title')}>
			<FormItem
				field={'atomizerId'}
				labels={['lab.build.atomizerId.label']}
				required
				help={<AtomizerTooltip/>}
			>
				<AtomizerSelect/>
			</FormItem>
			<FormItem
				field={'coilId'}
				labels={['lab.build.coilId.label']}
				required
				help={<CoilTooltip/>}
			>
				<CoilSelect/>
			</FormItem>
			<FormItem
				field={'cottonId'}
				labels={['lab.build.cottonId.label']}
				required
				help={<CottonTooltip/>}
			>
				<CottonSelect/>
			</FormItem>
			<FormItem
				field={'ohm'}
				labels={['lab.build.ohm.label']}
			>
				<InputNumber style={{width: '100%'}} min={0} max={4}/>
			</FormItem>
		</Card>
		<Divider/>
		<Card title={t('lab.build.advanced.title')}>
			<FormItem
				field={'coilOffset'}
				labels={['lab.build.coil.label']}
				tooltip={t('lab.build.coil.label.tooltip')}
			>
				<Slider
					included={false}
					tipFormatter={null}
					marks={{
						"-2": -2,
						"-1": -1,
						"0": 0,
						"1": 1,
						"2": 2,
					}}
					min={-2}
					max={2}
				/>
			</FormItem>
			<FormItem
				field={'cottonOffset'}
				labels={['lab.build.cotton.label']}
				tooltip={t('lab.build.cotton.label.tooltip')}
			>
				<Slider
					included={false}
					tipFormatter={null}
					marks={{
						"-2": -2,
						"-1": -1,
						"0": 0,
						"1": 1,
						"2": 2,
					}}
					min={-2}
					max={2}
				/>
			</FormItem>
			<FormItem
				field={'coils'}
				labels={['lab.build.coils.label']}
			>
				<Slider
					included={false}
					tipFormatter={null}
					marks={{
						1: 1,
						2: 2,
						3: 3,
						4: 4,
					}}
					min={1}
					max={4}
					step={null}
				/>
			</FormItem>
		</Card>
		<Divider/>
		<Centered>
			<Submit label={'lab.build.update.submit'}/>
		</Centered>
	</PatchDefaultForm>
}
