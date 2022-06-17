import {FiberCreateForm} from "@/puff-smith/site/shared/fiber/@module/form/FiberCreateForm";
import {PlusOutlined} from "@ant-design/icons";
import {DrawerButton, IDrawerButtonProps, useOptionalFormItemContext} from "@leight-core/client";
import {FC} from "react";

export interface IFiberCreateInlineProps extends Partial<IDrawerButtonProps> {
}

export const FiberCreateInline: FC<IFiberCreateInlineProps> = props => {
	const formItem = useOptionalFormItemContext();
	return <DrawerButton
		type={"link"}
		size={"small"}
		icon={<PlusOutlined/>}
		title={"lab.fiber.create.title"}
		label={"lab.fiber.create.button"}
		{...props}
	>
		<FiberCreateForm
			onSuccess={({response}) => {
				formItem?.setValue(response.id);
			}}
		/>
	</DrawerButton>;
};
