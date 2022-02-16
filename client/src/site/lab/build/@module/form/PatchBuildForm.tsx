import {IPatchDefaultFormProps, PatchDefaultForm, useBuildQueryInvalidate, useBuildsQueryInvalidate} from "@/sdk/puff-smith/api/lab/build/endpoint";
import {BuildDto} from "@/sdk/puff-smith/build/dto";
import {FC} from "react";
import {Divider, InputNumber, message} from "antd";
import {useTranslation} from "react-i18next";
import {Card, Centered, DatePicker, FormItem, Submit} from "@leight-core/leight";
import moment from "moment";
import {BuildIcon} from "@/puff-smith";
import {useVapesQueryInvalidate} from "@/sdk/puff-smith/api/lab/vape/endpoint";
import {AtomizerTooltip} from "@/puff-smith/site/lab/atomizer/@module/form/AtomizerTooltip";
import {AtomizerSelect} from "@/puff-smith/site/lab/atomizer/@module/form/AtomizerSelect";
import {CoilCountInput} from "@/puff-smith/site/lab/build/@module/form/input/CoilCountInput";
import {CoilTooltip} from "@/puff-smith/site/lab/coil/@module/form/CoilTooltip";
import {CoilSelect} from "@/puff-smith/site/lab/coil/@module/form/CoilSelect";
import {CottonTooltip} from "@/puff-smith/site/lab/cotton/@module/form/CottonTooltip";
import {CottonSelect} from "@/puff-smith/site/lab/cotton/@module/form/CottonSelect";
import {DriptipTooltip} from "@/puff-smith/site/lab/driptip/@module/form/DriptipTooltip";
import {DriptipSelect} from "@/puff-smith/site/lab/driptip/@module/form/DriptipSelect";
import {DrawSelect} from "@/puff-smith/component/input/DrawSelect";
import {ModTooltip} from "@/puff-smith/site/lab/mod/@module/form/ModTooltip";
import {ModSelect} from "@/puff-smith/site/lab/mod/@module/form/ModSelect";

export interface IPatchBuildFormProps extends Partial<IPatchDefaultFormProps> {
	build: BuildDto;
}

export const PatchBuildForm: FC<IPatchBuildFormProps> = ({build, onSuccess, ...props}) => {
	const {t} = useTranslation();
	const buildQueryInvalidate = useBuildQueryInvalidate();
	const buildsQueryInvalidate = useBuildsQueryInvalidate();
	const vapesQueryInvalidate = useVapesQueryInvalidate();
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
			buildQueryInvalidate();
			buildsQueryInvalidate();
			vapesQueryInvalidate();
			onSuccess?.(response);
		}}
		{...props}
	>
		<Card title={'lab.build.build.title'}>
			<FormItem
				field={'atomizerId'}
				required
				help={<AtomizerTooltip/>}
			>
				<AtomizerSelect/>
			</FormItem>
			<FormItem
				field={'modId'}
				hasTooltip
				help={<ModTooltip/>}
			>
				<ModSelect allowClear/>
			</FormItem>
			<FormItem
				field={'driptipId'}
				hasTooltip
				help={<DriptipTooltip/>}
			>
				<DriptipSelect allowClear/>
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
		<Card title={'lab.build.advanced.title'}>
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
			<FormItem
				field={'drawIds'}
			>
				<DrawSelect/>
			</FormItem>
		</Card>
		<Divider/>
		<Centered>
			<Submit icon={<BuildIcon/>} label={'update.submit'}/>
		</Centered>
	</PatchDefaultForm>
}
