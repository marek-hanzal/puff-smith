import {CoilCreateForm} from "@/puff-smith/site/lab/coil/@module/form/CoilCreateForm";
import {PlusOutlined} from "@ant-design/icons";
import {DrawerButton, IDrawerButtonProps, useOptionalFormItemContext} from "@leight-core/client";
import {FC} from "react";

export interface ICoilCreateInlineProps extends Partial<IDrawerButtonProps> {
}

export const CoilCreateInline: FC<ICoilCreateInlineProps> = props => {
	const formItem = useOptionalFormItemContext();
	return <DrawerButton
		type={"link"}
		size={"small"}
		icon={<PlusOutlined/>}
		title={"lab.coil.create.title"}
		label={"lab.coil.create.button"}
		{...props}
	>
		<CoilCreateForm
			onSuccess={({response}) => {
				formItem?.setValue(response.id);
			}}
		/>
	</DrawerButton>;
};
