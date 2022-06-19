import {TokenCreateForm} from "@/puff-smith/site/shared/token/@module/form/TokenCreateForm";
import {PlusOutlined} from "@ant-design/icons";
import {DrawerButton, IDrawerButtonProps, useOptionalFormItemContext} from "@leight-core/client";
import {FC} from "react";

export interface ITokenCreateInlineProps extends Partial<IDrawerButtonProps> {
}

export const TokenCreateInline: FC<ITokenCreateInlineProps> = props => {
	const formItem = useOptionalFormItemContext();
	return <DrawerButton
		type={"link"}
		size={"small"}
		icon={<PlusOutlined/>}
		title={"lab.token.create.title"}
		label={"lab.token.create.button"}
		{...props}
	>
		<TokenCreateForm
			onSuccess={({response}) => {
				const values = formItem?.getValue() || [];
				values.push(response.id);
				formItem?.setValue(values);
			}}
		/>
	</DrawerButton>;
};
