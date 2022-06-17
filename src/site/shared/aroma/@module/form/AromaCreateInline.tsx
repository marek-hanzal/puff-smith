import {AromaCreateForm} from "@/puff-smith/site/shared/aroma/@module/form/AromaCreateForm";
import {PlusOutlined} from "@ant-design/icons";
import {DrawerButton, IDrawerButtonProps, useOptionalFormItemContext} from "@leight-core/client";
import {FC} from "react";

export interface IAromaCreateInlineProps extends Partial<IDrawerButtonProps> {
}

export const AromaCreateInline: FC<IAromaCreateInlineProps> = props => {
	const formItem = useOptionalFormItemContext();
	return <DrawerButton
		type={"link"}
		size={"small"}
		icon={<PlusOutlined/>}
		title={"lab.aroma.create.title"}
		label={"lab.aroma.create.button"}
		width={920}
		{...props}
	>
		<AromaCreateForm
			onSuccess={({response}) => {
				formItem?.setValue(response.id);
			}}
		/>
	</DrawerButton>;
};
