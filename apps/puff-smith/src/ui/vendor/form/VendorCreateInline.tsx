import {IVendor}          from "@/puff-smith/service/vendor/interface";
import {VendorCreateForm} from "@/puff-smith/ui/vendor/form/VendorCreateForm";
import {PlusOutlined}     from "@ant-design/icons";
import {
	DrawerButton,
	IDrawerButtonProps,
	useOptionalMobileFormItemContext
}                         from "@leight-core/viv";
import {FC}               from "react";

export interface IVendorCreateInlineProps extends Partial<IDrawerButtonProps> {
	onSuccess?(vendor: IVendor): void;
}

export const VendorCreateInline: FC<IVendorCreateInlineProps> = ({onSuccess, ...props}) => {
	const formItem = useOptionalMobileFormItemContext();
	return <DrawerButton
		type={"link"}
		size={"small"}
		icon={<PlusOutlined/>}
		translation={{
			namespace: "shared.vendor.create",
			text:      "title",
		}}
		label={"button"}
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
