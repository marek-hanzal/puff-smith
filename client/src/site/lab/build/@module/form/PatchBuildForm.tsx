import {IPatchDefaultFormProps, PatchDefaultForm, useBuildsQueryInvalidate} from "@/sdk/puff-smith/api/lab/build/endpoint";
import {BuildDto} from "@/sdk/puff-smith/build/dto";
import {FC} from "react";
import {Divider, InputNumber, message} from "antd";
import {useTranslation} from "react-i18next";
import {AtomizerSelect, AtomizerTooltip} from "@/puff-smith/site/lab/atomizer";
import {CoilSelect, CoilTooltip} from "@/puff-smith/site/lab/coil";
import {CottonSelect, CottonTooltip} from "@/puff-smith/site/lab/cotton";
import {Card, Centered, DatePicker, FormItem, Submit} from "@leight-core/leight";
import moment from "moment";
import {BuildIcon} from "@/puff-smith";
import {CoilCountInput, CoilOffsetInput, CottonOffsetInput, GlowInput} from "@/puff-smith/site/lab/build";

export interface IPatchBuildFormProps extends Partial<IPatchDefaultFormProps> {
	build: BuildDto;
}

export const PatchBuildForm: FC<IPatchBuildFormProps> = ({build, onSuccess, ...props}) => {
	const {t} = useTranslation();
	const buildsQueryInvalidate = useBuildsQueryInvalidate();
	return <PatchDefaultForm
		layout={'vertical'}
		translation={'lab.build'}
		toForm={() => ({
			...build,
			created: moment(build.created),
		})}
		toMutation={values => ({
			...values,
			...{id: build.id}
		})}
		onSuccess={response => {
			message.success(t("lab.build.update.success", {data: response.response}));
			buildsQueryInvalidate();
			onSuccess?.(response);
		}}
		{...props}
	>
		<Card title={t('lab.build.build.title')}>
			<FormItem
				field={'atomizerId'}
				required
				help={<AtomizerTooltip/>}
			>
				<AtomizerSelect/>
			</FormItem>
			<FormItem
				field={'cottonId'}
				required
				help={<CottonTooltip/>}
			>
				<CottonSelect/>
			</FormItem>
			<FormItem
				field={'coilId'}
				required
				help={<CoilTooltip/>}
			>
				<CoilSelect/>
			</FormItem>
			<FormItem
				field={'created'}
			>
				<DatePicker showTime/>
			</FormItem>
		</Card>
		<Divider/>
		<Card title={t('lab.build.advanced.title')}>
			<FormItem
				field={'coilOffset'}
			>
				<CoilOffsetInput/>
			</FormItem>
			<FormItem
				field={'cottonOffset'}
			>
				<CottonOffsetInput/>
			</FormItem>
			<FormItem
				field={'glow'}
			>
				<GlowInput/>
			</FormItem>
			<FormItem
				field={'coils'}
			>
				<CoilCountInput/>
			</FormItem>
			<FormItem
				field={'ohm'}
			>
				<InputNumber style={{width: '100%'}} min={0} max={4}/>
			</FormItem>
		</Card>
		<Divider/>
		<Centered>
			<Submit icon={<BuildIcon/>} label={'update.submit'}/>
		</Centered>
	</PatchDefaultForm>
}
