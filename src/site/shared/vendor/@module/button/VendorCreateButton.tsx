import {LiquidIcon} from "@/puff-smith/component/icon/LiquidIcon";
import {VendorCreateForm} from "@/puff-smith/site/shared/vendor/@module/form/VendorCreateForm";
import {DrawerButton, IDrawerButtonProps} from "@leight-core/client";
import {FC} from "react";

export interface IVendorCreateButtonProps extends Partial<IDrawerButtonProps> {
}

export const VendorCreateButton: FC<IVendorCreateButtonProps> = props => {
	return <DrawerButton
		size={"large"}
		type={"primary"}
		title={"market.vendor.create.title"}
		label={"market.vendor.create.button"}
		icon={<LiquidIcon/>}
		{...props}
	>
		<VendorCreateForm/>
	</DrawerButton>;
};
