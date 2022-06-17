import {BaseCreateForm} from "@/puff-smith/site/shared/base/@module/form/BaseCreateForm";
import {PlusOutlined} from "@ant-design/icons";
import {DrawerButton, IDrawerButtonProps, useOptionalFormItemContext} from "@leight-core/client";
import {FC} from "react";

export interface IBaseCreateInlineProps extends Partial<IDrawerButtonProps> {
}

export const BaseCreateInline: FC<IBaseCreateInlineProps> = props => {
	const formItem = useOptionalFormItemContext();
	return <DrawerButton
		type={"link"}
		size={"small"}
		icon={<PlusOutlined/>}
		title={"lab.base.create.title"}
		label={"lab.base.create.button"}
		{...props}
	>
		<BaseCreateForm
			onSuccess={({response}) => {
				formItem?.setValue(response.id);
			}}
		/>
	</DrawerButton>;
};
