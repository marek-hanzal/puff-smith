import {CoilCreateForm} from "@/puff-smith/site/lab/coil/@module/form/CoilCreateForm";
import {ICreateDefaultFormProps} from "@/sdk/api/coil/create";
import {PlusOutlined} from "@ant-design/icons";
import {DrawerButton, IDrawerButtonProps, useOptionalFormItemContext} from "@leight-core/client";
import {FC} from "react";

export interface ICoilCreateInlineProps extends Partial<IDrawerButtonProps> {
	onSuccess?: ICreateDefaultFormProps["onSuccess"];
}

export const CoilCreateInline: FC<ICoilCreateInlineProps> = ({onSuccess, ...props}) => {
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
			onSuccess={({response, ...rest}) => {
				formItem?.setValue(response.id);
				onSuccess?.({response, ...rest});
			}}
		/>
	</DrawerButton>;
};
