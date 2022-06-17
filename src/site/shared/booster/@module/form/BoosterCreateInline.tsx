import {BoosterCreateForm} from "@/puff-smith/site/shared/booster/@module/form/BoosterCreateForm";
import {PlusOutlined} from "@ant-design/icons";
import {DrawerButton, IDrawerButtonProps, useOptionalFormItemContext} from "@leight-core/client";
import {FC} from "react";

export interface IBoosterCreateInlineProps extends Partial<IDrawerButtonProps> {
}

export const BoosterCreateInline: FC<IBoosterCreateInlineProps> = props => {
	const formItem = useOptionalFormItemContext();
	return <DrawerButton
		type={"link"}
		size={"small"}
		icon={<PlusOutlined/>}
		title={"lab.booster.create.title"}
		label={"lab.booster.create.button"}
		{...props}
	>
		<BoosterCreateForm
			onSuccess={({response}) => {
				formItem?.setValue(response.id);
			}}
		/>
	</DrawerButton>;
};
