import {IVendor} from "@/puff-smith/service/vendor/interface";
import {VendorCreateForm} from "@/puff-smith/ui/vendor/form/VendorCreateForm";
import {PlusOutlined} from "@ant-design/icons";
import {DrawerButton, IDrawerButtonProps, useOptionalFormItemContext} from "@leight-core/client";
import {FC} from "react";

export interface IVendorCreateInlineProps extends Partial<IDrawerButtonProps> {
	onSuccess?(vendor: IVendor): void;
}

export const VendorCreateInline: FC<IVendorCreateInlineProps> = ({onSuccess, ...props}) => {
	const formItem = useOptionalFormItemContext();
	return <DrawerButton
		type={"link"}
		size={"small"}
		icon={<PlusOutlined/>}
		title={"shared.vendor.create.title"}
		label={"shared.vendor.create.button"}
		{...props}
	>
		<VendorCreateForm
			onSuccess={({response}) => {
				onSuccess?.(response);
				formItem?.setValue(response.id);
			}}
		/>
	</DrawerButton>;
};
