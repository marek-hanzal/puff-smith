import {VendorCreateForm} from "@/puff-smith/site/shared/vendor/@module/form/VendorCreateForm";
import {PlusOutlined} from "@ant-design/icons";
import {DrawerButton, IDrawerButtonProps, useOptionalFormItemContext} from "@leight-core/client";
import {FC} from "react";

export interface IVendorCreateInlineProps extends Partial<IDrawerButtonProps> {
}

export const VendorCreateInline: FC<IVendorCreateInlineProps> = props => {
	const formItem = useOptionalFormItemContext();
	return <DrawerButton
		type={"link"}
		size={"small"}
		icon={<PlusOutlined/>}
		title={"lab.vendor.create.title"}
		label={"lab.vendor.create.button"}
		{...props}
	>
		<VendorCreateForm
			onSuccess={({response}) => {
				formItem?.setValue(response.id);
			}}
		/>
	</DrawerButton>;
};
