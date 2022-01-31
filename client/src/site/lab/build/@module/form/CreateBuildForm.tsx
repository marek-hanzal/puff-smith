import {CreateDefaultForm, ICreateDefaultFormProps} from "@/sdk/puff-smith/api/lab/build/endpoint";
import {FC} from "react";
import {Card, Centered, DatePicker, FormItem, Submit} from "@leight-core/leight";
import {useTranslation} from "react-i18next";
import {AtomizerSelect, AtomizerTooltip} from "@/puff-smith/site/lab/atomizer";
import {Divider, InputNumber, message, Slider} from "antd";
import {CoilSelect, CoilTooltip} from "@/puff-smith/site/lab/coil";
import {CottonSelect, CottonTooltip} from "@/puff-smith/site/lab/cotton";
import {BuildDto} from "@/sdk/puff-smith/build/dto";
import moment from "moment";

export interface ICreateBuildFormProps extends Partial<ICreateDefaultFormProps> {
	build?: BuildDto
}

export const CreateBuildForm: FC<ICreateBuildFormProps> = ({build, ...props}) => {
	const {t} = useTranslation();
	return <CreateDefaultForm
		toForm={() => ({
			coils: 1,
			coilOffset: 0,
			cottonOffset: 0,
			...build,
			created: moment(),
			name: null,
			description: null,
		})}
		onSuccess={({navigate, response}) => {
			message.success(t("lab.build.created.message", {data: response}));
			navigate("/lab/build/list");
		}}
		toError={({error}) => ({
			"Duplicate entry [z_build_name_unique] of [z_build].": {id: ["name"], error},
		})}
		{...props}
	>
		<Card title={t('lab.build.build.title')}>
			<FormItem
				field={'atomizerId'}
				labels={['lab.build.atomizerId.label']}
				required
				help={<AtomizerTooltip/>}
			>
				<AtomizerSelect allowClear/>
			</FormItem>
			<FormItem
				field={'coilId'}
				labels={['lab.build.coilId.label']}
				required
				help={<CoilTooltip/>}
			>
				<CoilSelect allowClear/>
			</FormItem>
			<FormItem
				field={'cottonId'}
				labels={['lab.build.cottonId.label']}
				required
				help={<CottonTooltip/>}
			>
				<CottonSelect allowClear/>
			</FormItem>
			<FormItem
				field={'ohm'}
				labels={['lab.build.ohm.label']}
			>
				<InputNumber style={{width: '100%'}} min={0} max={4}/>
			</FormItem>
			<FormItem
				field={'created'}
				labels={['lab.build.created.label']}
			>
				<DatePicker showTime/>
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
				field={'glow'}
				labels={['lab.build.glow.label']}
				tooltip={t('lab.build.glow.label.tooltip')}
			>
				<Slider
					marks={{
						1: 1,
						2: 2,
						3: 3,
						4: 4,
						5: 5,
					}}
					min={1}
					max={5}
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
			<Submit label={'lab.build.create.submit'}/>
		</Centered>
	</CreateDefaultForm>;
}
