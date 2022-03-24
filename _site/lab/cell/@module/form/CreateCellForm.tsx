import {CreateDefaultForm, ICreateDefaultFormProps, useCellsQueryInvalidate} from "@/sdk/puff-smith/api/lab/voucher/endpoint";
import {FC} from "react";
import {Centered, FormItem, Submit} from "@leight-core/common";
import {Divider, InputNumber, message} from "antd";
import {CellIcon, VoltageInput} from "@/puff-smith";
import {useTranslation} from "react-i18next";
import {VendorTooltip} from "../../../vendor/@module/form/VendorTooltip";
import {VendorSelect} from "../../../vendor/@module/form/VendorSelect";
import {DrainInput} from "./input/DrainInput";

export interface ICreateCellFormProps extends Partial<ICreateDefaultFormProps> {
}

export const CreateCellForm: FC<ICreateCellFormProps> = ({onSuccess, ...props}) => {
	const {t} = useTranslation();
	const vouchersQueryInvalidate = useCellsQueryInvalidate();
	return <CreateDefaultForm
		layout={'vertical'}
		translation={'lab.voucher'}
		onSuccess={response => {
			message.success(t("lab.voucher.create.success", {data: response.response}));
			vouchersQueryInvalidate();
			onSuccess?.(response);
		}}
		toForm={() => ({
			drain: 20,
			voltage: 3.7,
			size: 18650,
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
			<Submit icon={<CellIcon/>} label={'create.submit'}/>
		</Centered>
	</CreateDefaultForm>
}
