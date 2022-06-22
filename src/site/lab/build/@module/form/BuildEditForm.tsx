import {BuildIcon} from "@/puff-smith/component/icon/BuildIcon";
import {IBuild} from "@/puff-smith/service/build/interface";
import {CottonSelect} from "@/puff-smith/site/inventory/cotton/@module/form/CottonSelect";
import {CottonCreateInline} from "@/puff-smith/site/shared/cotton/@module/form/CottonCreateInline";
import {IPatchDefaultFormProps, PatchDefaultForm} from "@/sdk/api/lab/build/patch";
import {Centered, FormItem, Submit, SwitchItem} from "@leight-core/client";
import {Divider, InputNumber, message} from "antd";
import {FC} from "react";
import {useTranslation} from "react-i18next";

export interface IBuildEditFormProps extends Partial<IPatchDefaultFormProps> {
	build: IBuild;
}

export const BuildEditForm: FC<IBuildEditFormProps> = ({build, ...props}) => {
	const {t} = useTranslation();
	return <PatchDefaultForm
		onSuccess={({navigate, response}) => {
			message.success(t("lab.build.edit.success", response));
			navigate("/lab/build/[buildId]", {buildId: build.id});
		}}
		translation={"lab.build.edit"}
		toForm={() => build}
		toMutation={values => ({
			id: build.id,
			...values,
		})}
		{...props}
	>
		<FormItem field={"cottonId"} required extra={<CottonCreateInline/>}>
			<CottonSelect
				allowClear
			/>
		</FormItem>
		<FormItem field={"ohm"} required hasTooltip>
			<InputNumber
				style={{width: "100%"}}
				min={0.05}
				max={4}
				step={0.2}
			/>
		</FormItem>
		<SwitchItem field={"active"} hasTooltip/>
		<Divider/>
		<Centered>
			<Submit icon={<BuildIcon/>} label={"edit"}/>
		</Centered>
	</PatchDefaultForm>;
};
