import {IPatchDefaultFormProps, PatchDefaultForm} from "@/sdk/puff-smith/api/lab/build/endpoint";
import {BuildDto} from "@/sdk/puff-smith/build/dto";
import {FC} from "react";
import {Divider, InputNumber, message} from "antd";
import {useTranslation} from "react-i18next";
import {AtomizerSelect, AtomizerTooltip} from "@/puff-smith/site/lab/atomizer";
import {CoilSelect, CoilTooltip} from "@/puff-smith/site/lab/coil";
import {CottonSelect, CottonTooltip} from "@/puff-smith/site/lab/cotton";
import {Card, Centered, DatePicker, FormItem, Submit, SwitchItem} from "@leight-core/leight";
import moment from "moment";
import {BuildIcon} from "@/puff-smith";
import {CoilCountInput, CoilOffsetInput, CottonOffsetInput, GlowOffsetInput} from "@/puff-smith/site/lab/build";

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
				<CoilOffsetInput/>
			</FormItem>
			<FormItem
				field={'cottonOffset'}
				labels={['lab.build.cotton.label']}
				tooltip={t('lab.build.cotton.label.tooltip')}
			>
				<CottonOffsetInput/>
			</FormItem>
			<FormItem
				field={'glow'}
				labels={['lab.build.glow.label']}
				tooltip={t('lab.build.glow.label.tooltip')}
			>
				<GlowOffsetInput/>
			</FormItem>
			<FormItem
				field={'coils'}
				labels={['lab.build.coils.label']}
			>
				<CoilCountInput/>
			</FormItem>
			<SwitchItem
				field={'active'}
				labels={['lab.build.active.label']}
				tooltip={t('lab.build.active.label.tooltip')}
			/>
		</Card>
		<Divider/>
		<Centered>
			<Submit icon={<BuildIcon/>} label={'lab.build.update.submit'}/>
		</Centered>
	</PatchDefaultForm>
}
