import {IPatchDefaultFormProps, PatchDefaultForm, useBuildQueryInvalidate, useBuildsQueryInvalidate} from "@/sdk/puff-smith/api/lab/build/endpoint";
import {BuildDto} from "@/sdk/puff-smith/build/dto";
import {FC, useState} from "react";
import {Divider, InputNumber, message} from "antd";
import {useTranslation} from "react-i18next";
import {Card, Centered, DatePicker, FormItem, Submit} from "@leight-core/common";
import moment from "moment";
import {BuildIcon} from "@/puff-smith";
import {useVapesQueryInvalidate} from "@/sdk/puff-smith/api/lab/vape/endpoint";
import {AtomizerSelect} from "@/puff-smith/site/lab/atomizer/@module/form/AtomizerSelect";
import {CoilTooltip} from "@/puff-smith/site/lab/coil/@module/form/CoilTooltip";
import {CoilSelect} from "@/puff-smith/site/lab/coil/@module/form/CoilSelect";
import {CottonSelect} from "@/puff-smith/site/lab/cotton/@module/form/CottonSelect";
import {DriptipTooltip} from "@/puff-smith/site/lab/driptip/@module/form/DriptipTooltip";
import {DriptipSelect} from "@/puff-smith/site/lab/driptip/@module/form/DriptipSelect";
import {DrawSelect} from "@/puff-smith/component/input/DrawSelect";
import {ModSelect} from "@/puff-smith/site/lab/mod/@module/form/ModSelect";
import {DualCoilInput} from "@/puff-smith/component/input/DualCoilInput";
import {DualModeInput} from "@/puff-smith/component/input/DualModeInput";

export interface IPatchBuildFormProps extends Partial<IPatchDefaultFormProps> {
	build: BuildDto;
}

export const PatchBuildForm: FC<IPatchBuildFormProps> = ({build, onSuccess, ...props}) => {
	const {t} = useTranslation();
	const buildQueryInvalidate = useBuildQueryInvalidate();
	const buildsQueryInvalidate = useBuildsQueryInvalidate();
	const vapesQueryInvalidate = useVapesQueryInvalidate();
	const [dual, setDual] = useState<boolean>(build.dual);
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
			>
				<AtomizerSelect/>
			</FormItem>
			<FormItem
				field={'modId'}
				hasTooltip
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
			<DualCoilInput
				field={'dual'}
				switchProps={{
					onChange: setDual,
				}}
			/>
			{dual && <FormItem
				field={'dualMode'}
				required
			>
				<DualModeInput/>
			</FormItem>}
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
