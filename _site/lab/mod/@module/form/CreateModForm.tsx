import {CreateDefaultForm, ICreateDefaultFormProps, useModsQueryInvalidate} from "@/sdk/puff-smith/api/lab/mod/endpoint";
import {FC} from "react";
import {Divider, InputNumber, message} from "antd";
import {useTranslation} from "react-i18next";
import {Centered, FormItem, Submit} from "@leight-core/common";
import {ModIcon, VoltageInput} from "@/puff-smith";
import {VendorTooltip} from "../../../vendor/@module/form/VendorTooltip";
import {VendorSelect} from "../../../vendor/@module/form/VendorSelect";
import {CellTypeSelect} from "@/puff-smith/component/input/CellTypeSelect";

export interface ICreateModFormProps extends Partial<ICreateDefaultFormProps> {
}

export const CreateModForm: FC<ICreateModFormProps> = ({onSuccess, ...props}) => {
	const {t} = useTranslation();
	const modsQueryInvalidate = useModsQueryInvalidate();
	return <CreateDefaultForm
		layout={'vertical'}
		translation={'lab.mod'}
		onSuccess={response => {
			message.success(t("lab.mod.created.message", {data: response.response}));
			modsQueryInvalidate();
			onSuccess?.(response);
		}}
		toError={({error}) => ({
			"Duplicate entry [z_mod_name_unique] of [z_mod].": {id: ["name"], error},
		})}
		toForm={() => ({
			voltage: 3.7,
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
			hasTooltip
		>
			<InputNumber
				style={{width: '100%'}}
				min={0}
				max={1000}
			/>
		</FormItem>
		<Divider/>
		<Centered>
			<Submit icon={<ModIcon/>} label={'create.submit'}/>
		</Centered>
	</CreateDefaultForm>
}
