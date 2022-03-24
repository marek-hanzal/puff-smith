import {IPatchDefaultFormProps, PatchDefaultForm, useCellQueryInvalidate, useCellsQueryInvalidate} from "@/sdk/puff-smith/api/lab/voucher/endpoint";
import {FC} from "react";
import {Divider, InputNumber, message} from "antd";
import {useTranslation} from "react-i18next";
import {Centered, FormItem, Submit} from "@leight-core/common";
import {CellIcon, VoltageInput} from "@/puff-smith";
import {CellDto} from "@/sdk/puff-smith/voucher/dto";
import {VendorTooltip} from "../../../vendor/@module/form/VendorTooltip";
import {VendorSelect} from "../../../vendor/@module/form/VendorSelect";
import {DrainInput} from "./input/DrainInput";

export interface IPatchCellFormProps extends Partial<IPatchDefaultFormProps> {
	voucher: CellDto;
}

export const PatchCellForm: FC<IPatchCellFormProps> = ({onSuccess, voucher, ...props}) => {
	const {t} = useTranslation();
	const voucherQueryInvalidate = useCellQueryInvalidate()
	const vouchersQueryInvalidate = useCellsQueryInvalidate();
	return <PatchDefaultForm
		layout={'vertical'}
		translation={'lab.voucher'}
		onSuccess={response => {
			message.success(t("lab.voucher.updated.message", {data: response.response}));
			voucherQueryInvalidate();
			vouchersQueryInvalidate();
			onSuccess?.(response);
		}}
		toForm={() => voucher}
		toMutation={values => ({
			id: voucher.id,
			...values,
		})}
		toError={({error}) => ({
			"Duplicate entry [z_voucher_name_unique] of [z_voucher].": {id: ["name"], error},
		})}
		{...props}
	>
		<FormItem
			field={'name'}
			hasTooltip
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
			field={'size'}
			hasTooltip
			required
		>
			<InputNumber min={18000} max={32000} style={{width: '100%'}}/>
		</FormItem>
		<FormItem
			field={'drain'}
			hasTooltip
			required
		>
			<DrainInput/>
		</FormItem>
		<FormItem
			field={'voltage'}
			hasTooltip
			required
		>
			<VoltageInput/>
		</FormItem>
		<Divider/>
		<Centered>
			<Submit icon={<CellIcon/>} label={'update.submit'}/>
		</Centered>
	</PatchDefaultForm>
}
