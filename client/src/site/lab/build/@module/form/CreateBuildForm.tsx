import {CreateDefaultForm, ICreateDefaultFormProps, useBuildsQueryInvalidate} from "@/sdk/puff-smith/api/lab/build/endpoint";
import {FC, ReactNode} from "react";
import {Card, Centered, DatePicker, FormItem, ItemGroup, Submit, SwitchItem} from "@leight-core/leight";
import {useTranslation} from "react-i18next";
import {AtomizerSelect, AtomizerTooltip} from "@/puff-smith/site/lab/atomizer";
import {Divider, InputNumber, message} from "antd";
import {CottonSelect, CottonTooltip} from "@/puff-smith/site/lab/cotton";
import {BuildDto} from "@/sdk/puff-smith/build/dto";
import moment from "moment";
import {BuildIcon} from "@/puff-smith";
import {CoilCountInput, CoilOffsetInput, CottonOffsetInput, GlowInput} from "@/puff-smith/site/lab/build";
import {WireSelect, WireTooltip} from "@/puff-smith/site/lab/wire";
import {SizeInput, WrapsInput} from "@/puff-smith/site/lab/coil";
import {ButtonBar} from "@leight-core/leight/dist";

export interface ICreateBuildFormProps extends Partial<ICreateDefaultFormProps> {
	build?: BuildDto
	buttons?: ReactNode;
}

export const CreateBuildForm: FC<ICreateBuildFormProps> = ({build, buttons, onSuccess, ...props}) => {
	const {t} = useTranslation();
	const buildsQueryInvalidate = useBuildsQueryInvalidate();
	return <CreateDefaultForm
		layout={'vertical'}
		translation={'lab.build'}
		toForm={() => ({
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
			<ItemGroup prefix={'coil'} translation={'lab.coil'}>
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
				field={'coilOffset'}
				hasTooltip
			>
				<CoilOffsetInput/>
			</FormItem>
			<FormItem
				field={'cottonOffset'}
				hasTooltip
			>
				<CottonOffsetInput/>
			</FormItem>
			<FormItem
				field={'glow'}
				hasTooltip
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
