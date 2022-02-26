import {DrawerButton, EditIcon, IDrawerButtonProps} from "@leight-core/common";
import {FC} from "react";
import {VendorDto} from "@/sdk/puff-smith/vendor/dto";
import {PatchVendorForm} from "@/puff-smith/site/lab/vendor/@module/form/PatchVendorForm";

export interface IVendorEditButtonProps extends Partial<IDrawerButtonProps> {
	vendor: VendorDto;
}

export const VendorEditButton: FC<IVendorEditButtonProps> = ({vendor, ...props}) => {
	return <DrawerButton
		size={'large'}
		type={'link'}
		icon={<EditIcon/>}
		title={'lab.vendor.button.edit'}
		{...props}
	>
		<PatchVendorForm vendor={vendor}/>
	</DrawerButton>
}
