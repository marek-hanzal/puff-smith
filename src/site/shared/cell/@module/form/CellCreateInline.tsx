import {CellCreateForm} from "@/puff-smith/site/shared/cell/@module/form/CellCreateForm";
import {ICreateDefaultFormProps} from "@/sdk/api/cell/create";
import {PlusOutlined} from "@ant-design/icons";
import {DrawerButton, IDrawerButtonProps, useOptionalFormItemContext} from "@leight-core/client";
import {FC} from "react";

export interface ICellCreateInlineProps extends Partial<IDrawerButtonProps> {
	onSuccess?: ICreateDefaultFormProps["onSuccess"];
}

export const CellCreateInline: FC<ICellCreateInlineProps> = ({onSuccess, ...props}) => {
	const formItem = useOptionalFormItemContext();
	return <DrawerButton
		type={"link"}
		size={"small"}
		icon={<PlusOutlined/>}
		title={"lab.cell.create.title"}
		label={"lab.cell.create.button"}
		{...props}
	>
		<CellCreateForm
			onSuccess={({response, ...rest}) => {
				formItem?.setValue(response.id);
				onSuccess?.({response, ...rest});
			}}
		/>
	</DrawerButton>;
};
