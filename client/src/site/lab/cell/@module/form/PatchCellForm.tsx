import {IPatchDefaultFormProps, PatchDefaultForm, useCellQueryInvalidate, useCellsQueryInvalidate} from "@/sdk/puff-smith/api/lab/cell/endpoint";
import {FC} from "react";
import {Divider, InputNumber, message} from "antd";
import {useTranslation} from "react-i18next";
import {Centered, FormItem, Submit} from "@leight-core/leight";
import {VendorSelect, VendorTooltip} from "@/puff-smith/site/lab/vendor";
import {CellIcon} from "@/puff-smith";
import {CellDto} from "@/sdk/puff-smith/cell/dto";
import {DrainInput} from "@/puff-smith/site/lab/cell";

export interface IPatchCellFormProps extends Partial<IPatchDefaultFormProps> {
	cell: CellDto;
}

export const PatchCellForm: FC<IPatchCellFormProps> = ({onSuccess, cell, ...props}) => {
	const {t} = useTranslation();
	const cellQueryInvalidate = useCellQueryInvalidate()
	const cellsQueryInvalidate = useCellsQueryInvalidate();
	return <PatchDefaultForm
		layout={'vertical'}
		translation={'lab.cell'}
		onSuccess={response => {
			message.success(t("lab.cell.updated.message", {data: response.response}));
			cellQueryInvalidate();
			cellsQueryInvalidate();
			onSuccess?.(response);
		}}
		toForm={() => cell}
		toMutation={values => ({
			id: cell.id,
			...values,
		})}
		toError={({error}) => ({
			"Duplicate entry [z_cell_name_unique] of [z_cell].": {id: ["name"], error},
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
			<InputNumber min={2} max={10} style={{width: '100%'}}/>
		</FormItem>
		<Divider/>
		<Centered>
			<Submit icon={<CellIcon/>} label={'update.submit'}/>
		</Centered>
	</PatchDefaultForm>
}
