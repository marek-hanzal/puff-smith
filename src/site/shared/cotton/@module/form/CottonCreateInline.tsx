import {CottonCreateForm} from "@/puff-smith/site/shared/cotton/@module/form/CottonCreateForm";
import {PlusOutlined} from "@ant-design/icons";
import {DrawerButton, IDrawerButtonProps, useOptionalFormItemContext} from "@leight-core/client";
import {FC} from "react";

export interface ICottonCreateInlineProps extends Partial<IDrawerButtonProps> {
}

export const CottonCreateInline: FC<ICottonCreateInlineProps> = props => {
	const formItem = useOptionalFormItemContext();
	return <DrawerButton
		type={"link"}
		size={"small"}
		icon={<PlusOutlined/>}
		title={"lab.cotton.create.title"}
		label={"lab.cotton.create.button"}
		{...props}
	>
		<CottonCreateForm
			onSuccess={({response}) => {
				formItem?.setValue(response.id);
			}}
		/>
	</DrawerButton>;
};
