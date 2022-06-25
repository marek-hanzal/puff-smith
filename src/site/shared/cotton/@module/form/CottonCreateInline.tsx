import {CottonCreateForm} from "@/puff-smith/site/shared/cotton/@module/form/CottonCreateForm";
import {ICreateDefaultFormProps} from "@/sdk/api/cotton/create";
import {PlusOutlined} from "@ant-design/icons";
import {DrawerButton, IDrawerButtonProps, useOptionalFormItemContext} from "@leight-core/client";
import {FC} from "react";

export interface ICottonCreateInlineProps extends Partial<IDrawerButtonProps> {
	onSuccess?: ICreateDefaultFormProps["onSuccess"];
}

export const CottonCreateInline: FC<ICottonCreateInlineProps> = ({onSuccess, ...props}) => {
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
			onSuccess={({response, ...rest}) => {
				formItem?.setValue(response.id);
				onSuccess?.({response, ...rest});
			}}
		/>
	</DrawerButton>;
};
