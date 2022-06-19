import {LicenseIcon} from "@/puff-smith/component/icon/LicenseIcon";
import {LicenseCreateForm} from "@/puff-smith/site/shared/license/@module/form/LicenseCreateForm";
import {DrawerButton, IDrawerButtonProps} from "@leight-core/client";
import {FC} from "react";

export interface ILicenseCreateButtonProps extends Partial<IDrawerButtonProps> {
}

export const LicenseCreateButton: FC<ILicenseCreateButtonProps> = props => {
	return <DrawerButton
		size={"large"}
		type={"primary"}
		title={"market.license.create.title"}
		label={"market.license.create.button"}
		icon={<LicenseIcon/>}
		{...props}
	>
		<LicenseCreateForm/>
	</DrawerButton>;
};
