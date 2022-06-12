import {WireCreateForm} from "@/puff-smith/site/shared/wire/@module/form/WireCreateForm";
import {PlusOutlined} from "@ant-design/icons";
import {DrawerButton, IDrawerButtonProps, useOptionalFormItemContext} from "@leight-core/client";
import {FC} from "react";

export interface IWireCreateInlineProps extends Partial<IDrawerButtonProps> {
}

export const WireCreateInline: FC<IWireCreateInlineProps> = props => {
	const formItem = useOptionalFormItemContext();
	return <DrawerButton
		type={"link"}
		size={"small"}
		icon={<PlusOutlined/>}
		title={"lab.wire.create.title"}
		label={"lab.wire.create.button"}
		{...props}
	>
		<WireCreateForm
			onSuccess={({response}) => {
				formItem?.setValue(response.id);
			}}
		/>
	</DrawerButton>;
};
