import {IPatchDefaultFormProps, PatchDefaultForm, useModQueryInvalidate, useModsQueryInvalidate} from "@/sdk/puff-smith/api/lab/mod/endpoint";
import {FC} from "react";
import {Divider, InputNumber, message} from "antd";
import {useTranslation} from "react-i18next";
import {Centered, FormItem, Submit} from "@leight-core/common";
import {ModIcon, VoltageInput} from "@/puff-smith";
import {ModDto} from "@/sdk/puff-smith/mod/dto";
import {VendorTooltip} from "../../../vendor/@module/form/VendorTooltip";
import {VendorSelect} from "../../../vendor/@module/form/VendorSelect";
import {CellTypeSelect} from "@/puff-smith/component/input/CellTypeSelect";

export interface IPatchModFormProps extends Partial<IPatchDefaultFormProps> {
	mod: ModDto;
}

export const PatchModForm: FC<IPatchModFormProps> = ({onSuccess, mod, ...props}) => {
	const {t} = useTranslation();
	const modQueryInvalidate = useModQueryInvalidate()
	const modsQueryInvalidate = useModsQueryInvalidate();
	return <PatchDefaultForm
		layout={'vertical'}
		translation={'lab.mod'}
		onSuccess={response => {
			message.success(t("lab.mod.updated.message", {data: response.response}));
			modQueryInvalidate();
			modsQueryInvalidate();
			onSuccess?.(response);
		}}
		toForm={() => mod}
		toMutation={values => ({
			id: mod.id,
			...values,
		})}
		toError={({error}) => ({
			"Duplicate entry [z_mod_name_unique] of [z_mod].": {id: ["name"], error},
		})}
		{...props}
	>
		<FormItem
			field={'name'}
			required
		/>
		<FormItem
			field={'vendorId'}
			required
			help={<VendorTooltip/>}
		>
			<VendorSelect/>
		</FormItem>
		<FormItem
			field={'voucherTypeIds'}
		>
			<CellTypeSelect mode={'multiple'} allowClear/>
		</FormItem>
		<FormItem
			field={'voltage'}
			hasTooltip
		>
			<VoltageInput/>
		</FormItem>
		<FormItem
			field={'power'}
		>
			<InputNumber
				style={{width: '100%'}}
				min={0}
				max={1000}
			/>
		</FormItem>
		<Divider/>
		<Centered>
			<Submit icon={<ModIcon/>} label={'update.submit'}/>
		</Centered>
	</PatchDefaultForm>
}
