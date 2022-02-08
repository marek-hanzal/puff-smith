import {CreateDefaultForm, ICreateDefaultFormProps} from "@/sdk/puff-smith/api/lab/build/endpoint";
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

export const CreateBuildForm: FC<ICreateBuildFormProps> = ({build, buttons, ...props}) => {
	const {t} = useTranslation();
	return <CreateDefaultForm
		layout={'vertical'}
		toForm={() => ({
			coils: 1,
			coilOffset: 0,
			cottonOffset: 0,
			glow: 3,
			coil: {
				wraps: 7,
				size: 0.3,
			},
			...build,
			created: moment(),
			name: null,
			description: null,
			deactivate: true,
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
				field={'cottonId'}
				labels={['lab.build.cottonId.label']}
				required
				help={<CottonTooltip/>}
			>
				<CottonSelect allowClear/>
			</FormItem>
			<FormItem
				field={'created'}
				labels={['lab.build.created.label']}
			>
				<DatePicker showTime/>
			</FormItem>
		</Card>
		<Divider/>
		<Card title={t('lab.build.coil.title')}>
			<ItemGroup prefix={'coil'}>
				<FormItem
					field={'wireId'}
					labels={['lab.coil.wireId.label']}
					required
					help={<WireTooltip/>}
				>
					<WireSelect/>
				</FormItem>
				<FormItem
					field={'wraps'}
					labels={['lab.coil.wraps.label']}
					tooltip={t('lab.coil.wraps.label.tooltip')}
					required
				>
					<WrapsInput/>
				</FormItem>
				<FormItem
					field={'size'}
					labels={['lab.coil.size.label']}
				>
					<SizeInput/>
				</FormItem>
			</ItemGroup>
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
				<GlowInput/>
			</FormItem>
			<FormItem
				field={'coils'}
				labels={['lab.build.coils.label']}
			>
				<CoilCountInput/>
			</FormItem>
			<FormItem
				field={'ohm'}
				labels={['lab.build.ohm.label']}
			>
				<InputNumber style={{width: '100%'}} min={0} max={4}/>
			</FormItem>
			<SwitchItem
				field={'deactivate'}
				tooltip={t('lab.build.deactivate.label.tooltip')}
				labels={['lab.build.deactivate.label']}
			/>
		</Card>
		<Divider/>
		<Centered>
			<ButtonBar align={'baseline'}>
				<Submit icon={<BuildIcon/>} label={'lab.build.create.submit'}/>
				{buttons}
			</ButtonBar>
		</Centered>
	</CreateDefaultForm>;
}
