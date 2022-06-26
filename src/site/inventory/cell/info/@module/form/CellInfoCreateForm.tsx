import {ICellInventory} from "@/puff-smith/service/cell/inventory/interface";
import {CreateDefaultForm, ICreateDefaultFormProps} from "@/sdk/api/cell/info/create";
import {useCellInfoQueryInvalidate} from "@/sdk/api/cell/info/query";
import {ToolOutlined} from "@ant-design/icons";
import {Centered, FormItem, Submit} from "@leight-core/client";
import {Divider, InputNumber, message} from "antd";
import {FC} from "react";
import {useTranslation} from "react-i18next";

export interface ICellInfoCreateFormProps extends Partial<ICreateDefaultFormProps> {
	cellInventory: ICellInventory;
}

export const CellInfoCreateForm: FC<ICellInfoCreateFormProps> = ({cellInventory, ...props}) => {
	const {t} = useTranslation();
	const cellInfoQueryInvalidate = useCellInfoQueryInvalidate();
	return <CreateDefaultForm
		translation={"inventory.cell.info"}
		toMutation={values => ({
			...values,
			cellId: cellInventory.cellId,
			cellInventoryId: cellInventory.id,
		})}
		toForm={() => ({
			voltage: cellInventory.cell.voltageMax,
			capacity: cellInventory.cell.capacity,
		})}
		onSuccess={async () => {
			message.success(t("inventory.cell.info.create.success"));
			await cellInfoQueryInvalidate();
		}}
		{...props}
	>
		{cellInventory.cell.voltageMax && <FormItem field={"voltage"} required>
			<InputNumber
				min={0}
				max={cellInventory.cell.voltageMax}
				step={0.01}
				style={{width: "100%"}}
			/>
		</FormItem>}
		{cellInventory.cell.capacity && <FormItem field={"capacity"}>
			<InputNumber
				min={0}
				max={cellInventory.cell.capacity}
				step={250}
				style={{width: "100%"}}
			/>
		</FormItem>}
		<Divider/>
		<Centered>
			<Submit icon={<ToolOutlined/>} label={"create"}/>
		</Centered>
	</CreateDefaultForm>;
};
