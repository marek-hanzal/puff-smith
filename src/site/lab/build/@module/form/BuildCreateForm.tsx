import {BuildIcon} from "@/puff-smith/component/icon/BuildIcon";
import {AtomizerSelect} from "@/puff-smith/site/inventory/atomizer/@module/form/AtomizerSelect";
import {CoilSelect} from "@/puff-smith/site/inventory/coil/@module/form/CoilSelect";
import {CottonSelect} from "@/puff-smith/site/inventory/cotton/@module/form/CottonSelect";
import {AtomizerCreateButton} from "@/puff-smith/site/shared/atomizer/@module/button/AtomizerCreateButton";
import {CoilCreateInline} from "@/puff-smith/site/shared/coil/@module/button/CoilCreateInline";
import {CottonCreateInline} from "@/puff-smith/site/shared/cotton/@module/form/CottonCreateInline";
import {CreateDefaultForm, ICreateDefaultFormProps} from "@/sdk/api/lab/build/create";
import {PlusOutlined} from "@ant-design/icons";
import {Centered, DatePicker, FormItem, Submit, SwitchItem} from "@leight-core/client";
import {InputNumber, message} from "antd";
import {FC} from "react";
import {useTranslation} from "react-i18next";

export interface IBuildCreateFormProps extends Partial<ICreateDefaultFormProps> {
}

export const BuildCreateForm: FC<IBuildCreateFormProps> = props => {
	const {t} = useTranslation();
	return <CreateDefaultForm
		onSuccess={({navigate, response}) => {
			message.success(t("lab.build.create.success", response));
			navigate("/lab/build");
		}}
		translation={"lab.build.create"}
		toForm={() => ({
			archive: true,
		})}
		{...props}
	>
		<FormItem field={"atomizerId"} required extra={<AtomizerCreateButton icon={<PlusOutlined/>} type={"link"} size={"small"}/>}>
			<AtomizerSelect
				autoFocus
				allowClear
			/>
		</FormItem>
		<FormItem field={"cottonId"} required extra={<CottonCreateInline/>}>
			<CottonSelect
				allowClear
			/>
		</FormItem>
		<FormItem field={"coilId"} required extra={<CoilCreateInline/>}>
			<CoilSelect
				allowClear
			/>
		</FormItem>
		<FormItem field={"ohm"} required hasTooltip>
			<InputNumber
				style={{width: "100%"}}
				min={0.05}
				max={4}
			/>
		</FormItem>
		<FormItem field={"created"} hasTooltip>
			<DatePicker/>
		</FormItem>
		<SwitchItem field={"archive"} hasTooltip/>
		<Centered>
			<Submit icon={<BuildIcon/>} label={"create"}/>
		</Centered>
	</CreateDefaultForm>;
};
