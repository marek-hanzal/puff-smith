import {CreateDefaultForm, ICreateDefaultFormProps, useBuildsQueryInvalidate} from "@/sdk/puff-smith/api/lab/build/endpoint";
import {FC, ReactNode} from "react";
import {ButtonBar, Card, Centered, DatePicker, FormItem, ItemGroup, Submit, SwitchItem} from "@leight-core/leight";
import {useTranslation} from "react-i18next";
import {Divider, InputNumber, message} from "antd";
import {BuildDto} from "@/sdk/puff-smith/build/dto";
import moment from "moment";
import {BuildIcon} from "@/puff-smith";
import {AtomizerTooltip} from "@/puff-smith/site/lab/atomizer/@module/form/AtomizerTooltip";
import {AtomizerSelect} from "@/puff-smith/site/lab/atomizer/@module/form/AtomizerSelect";
import {CoilCountInput} from "@/puff-smith/site/lab/build/@module/form/input/CoilCountInput";
import {WrapsInput} from "@/puff-smith/site/lab/coil/@module/form/input/WrapsInput";
import {SizeInput} from "@/puff-smith/site/lab/coil/@module/form/input/SizeInput";
import {CottonTooltip} from "@/puff-smith/site/lab/cotton/@module/form/CottonTooltip";
import {CottonSelect} from "@/puff-smith/site/lab/cotton/@module/form/CottonSelect";
import {DriptipTooltip} from "@/puff-smith/site/lab/driptip/@module/form/DriptipTooltip";
import {DriptipSelect} from "@/puff-smith/site/lab/driptip/@module/form/DriptipSelect";
import {useParams} from "@leight-core/leight/dist";
import {WireTooltip} from "@/puff-smith/site/lab/wire/@module/form/WireTooltip";
import {WireSelect} from "@/puff-smith/site/lab/wire/@module/form/WireSelect";

export interface ICreateBuildFormProps extends Partial<ICreateDefaultFormProps> {
	build?: BuildDto
	buttons?: ReactNode;
}

export const CreateBuildForm: FC<ICreateBuildFormProps> = ({build, buttons, onSuccess, ...props}) => {
	const {t} = useTranslation();
	const {atomizerId} = useParams();
	const buildsQueryInvalidate = useBuildsQueryInvalidate();
	return <CreateDefaultForm
		layout={'vertical'}
		translation={'lab.build'}
		toForm={() => ({
			atomizerId,
			coils: 1,
			coilOffset: 0,
			cottonOffset: 0,
			glow: 3,
			coil: {
				wraps: 7,
				size: 0.3,
				spaced: false,
			},
			...build,
			created: moment(),
			name: null,
			description: null,
			deactivate: true,
		})}
		onSuccess={response => {
			message.success(t("lab.build.created.message", {data: response.response}));
			buildsQueryInvalidate();
			onSuccess?.(response);
		}}
		toError={({error}) => ({
			"Duplicate entry [z_build_name_unique] of [z_build].": {id: ["name"], error},
		})}
		{...props}
	>
		<Card title={t('lab.build.build.title')}>
			<FormItem
				field={'atomizerId'}
				required
				help={<AtomizerTooltip/>}
			>
				<AtomizerSelect allowClear/>
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
				<CottonSelect allowClear/>
			</FormItem>
			<FormItem
				field={'created'}
			>
				<DatePicker showTime/>
			</FormItem>
		</Card>
		<Divider/>
		<Card title={t('lab.build.coil.title')}>
			<ItemGroup
				translation={'lab'}
				prefix={'coil'}
			>
				<FormItem
					field={'wireId'}
					required
					help={<WireTooltip/>}
				>
					<WireSelect allowClear/>
				</FormItem>
				<FormItem
					field={'wraps'}
					hasTooltip
					required
				>
					<WrapsInput/>
				</FormItem>
				<FormItem
					field={'size'}
				>
					<SizeInput/>
				</FormItem>
				<SwitchItem
					field={'spaced'}
				/>
			</ItemGroup>
		</Card>
		<Divider/>
		<Card title={t('lab.build.advanced.title')}>
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
			<SwitchItem
				field={'deactivate'}
				hasTooltip
			/>
		</Card>
		<Divider/>
		<Centered>
			<ButtonBar align={'baseline'}>
				<Submit icon={<BuildIcon/>} label={'create.submit'}/>
				{buttons}
			</ButtonBar>
		</Centered>
	</CreateDefaultForm>;
}
