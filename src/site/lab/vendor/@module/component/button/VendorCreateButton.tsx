import {CreateIcon, DrawerButton, IDrawerButtonProps} from "@leight-core/leight";
import {FC} from "react";
import {CreateVendorForm} from "@/puff-smith/site/lab/vendor/@module/form/CreateVendorForm";

export interface IVendorCreateButtonProps extends Partial<IDrawerButtonProps> {
}

export const VendorCreateButton: FC<IVendorCreateButtonProps> = props => {
	return <DrawerButton
		size={'large'}
		type={'link'}
		icon={<CreateIcon/>}
		title={'lab.vendor.button.create'}
		{...props}
	>
		<CreateVendorForm/>
	</DrawerButton>
}
