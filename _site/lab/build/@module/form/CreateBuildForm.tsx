import {CreateDefaultForm, ICreateDefaultFormProps, useBuildsQueryInvalidate, useOhmMutation} from "@/sdk/puff-smith/api/lab/build/endpoint";
import {FC, ReactNode, useState} from "react";
import {ButtonBar, Card, Centered, DatePicker, FormItem, ItemGroup, Submit, SwitchItem, useParams} from "@leight-core/common";
import {useTranslation} from "react-i18next";
import {Col, Divider, InputNumber, message, Row, Spin} from "antd";
import {BuildDto} from "@/sdk/puff-smith/build/dto";
import moment from "moment";
import {BuildIcon} from "@/puff-smith";
import {AtomizerSelect} from "../../../atomizer/@module/form/AtomizerSelect";
import {CottonSelect} from "../../../cotton/@module/form/CottonSelect";
import {DriptipTooltip} from "../../../driptip/@module/form/DriptipTooltip";
import {DriptipSelect} from "../../../driptip/@module/form/DriptipSelect";
import {DrawSelect} from "@/puff-smith/component/input/DrawSelect";
import {ModSelect} from "../../../mod/@module/form/ModSelect";
import {WireSelect} from "../../../wire/@module/form/WireSelect";
import {WrapsInput} from "../../../coil/@module/form/input/WrapsInput";
import {SizeInput} from "../../../coil/@module/form/input/SizeInput";
import {DualCoilInput} from "@/puff-smith/component/input/DualCoilInput";
import {DualModeInput} from "@/puff-smith/component/input/DualModeInput";
import {AtomizerDto} from "@/sdk/puff-smith/atomizer/dto";
import {FetchAtomizer} from "@/sdk/puff-smith/api/lab/atomizer/endpoint";

export interface ICreateBuildFormProps extends Partial<ICreateDefaultFormProps> {
	build?: BuildDto
	buttons?: ReactNode;
}

export const CreateBuildForm: FC<ICreateBuildFormProps> = ({build, buttons, onSuccess, onValuesChange, ...props}) => {
	const {t} = useTranslation();
	const {atomizerId} = useParams();
	const buildsQueryInvalidate = useBuildsQueryInvalidate();
	const [values, setValues] = useState<any>();
	const [atomizer, setAtomizer] = useState<AtomizerDto | undefined>();

	const ohmMutation = useOhmMutation();

	const canCoil = values?.atomizerId && values?.cottonId;
	const cacAdvanced = canCoil && values?.coil?.wireId;

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
			dual: false,
		})}
		onSuccess={response => {
			message.success(t("lab.build.created.message", {data: response.response}));
			buildsQueryInvalidate();
			onSuccess?.(response);
		}}
		onValuesChange={change => {
			const values = change.values;
			setValues(values);
			change?.changed?.ohm === undefined && values?.coil?.wireId && values?.coil?.wraps && values?.coil?.size && ohmMutation.mutate({
				wireId: values?.coil?.wireId,
				wraps: values?.coil?.wraps,
				size: values?.coil?.size,
			}, {
				onSuccess: ohm => {
					ohm && ohm > 0 && change.formContext.setValues({
						ohm,
					});
				},
			})
			onValuesChange?.(change);
		}}
		toError={({error}) => ({
			"Duplicate entry [z_build_name_unique] of [z_build].": {id: ["name"], error},
		})}
		{...props}
	>
		{atomizerId && <FetchAtomizer
			query={{atomizerId}}
			onUpdate={setAtomizer}
			placeholder={() => <></>}
		/>}
		<Row gutter={16}>
			<Col sm={24} md={24} lg={8}>
				<Card title={t('lab.build.build.title')}>
					<FormItem
						field={'atomizerId'}
						required
					>
						<AtomizerSelect
							allowClear
							autoFocus={!atomizerId}
							onChange={(_, value: any) => setAtomizer(value?.entity)}
						/>
					</FormItem>
					<FormItem
						field={'cottonId'}
						required
					>
						<CottonSelect
							allowClear
							autoFocus={!!atomizerId}
						/>
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
				</Card>
			</Col>
			<Col sm={24} md={24} lg={8}>
				<Card title={t('lab.build.coil.title')}>
					<Spin spinning={!canCoil} indicator={<></>}>
						<ItemGroup
							translation={'lab'}
							prefix={'coil'}
						>
							<FormItem
								field={'wireId'}
								required
							>
								<WireSelect allowClear/>
							</FormItem>
							<FormItem
								field={'wraps'}
								hasTooltip
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
					</Spin>
				</Card>
			</Col>
			<Col sm={24} md={24} lg={8}>
				<Card title={t('lab.build.advanced.title')}>
					<Spin spinning={!cacAdvanced} indicator={<></>}>
						{atomizer && atomizer.dual && <DualCoilInput
							field={'dual'}
						/>}
						{values?.dual && <FormItem
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
						<SwitchItem
							field={'deactivate'}
							hasTooltip
						/>
						<FormItem
							field={'created'}
						>
							<DatePicker showTime/>
						</FormItem>
					</Spin>
				</Card>
			</Col>
		</Row>
		<Divider/>
		<Centered>
			<ButtonBar align={'baseline'}>
				<Submit icon={<BuildIcon/>} label={'create.submit'}/>
				{buttons}
			</ButtonBar>
		</Centered>
	</CreateDefaultForm>;
}