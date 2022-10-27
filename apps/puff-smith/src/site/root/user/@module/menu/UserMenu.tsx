import {CertificateIcon} from "@/puff-smith/component/icon/CertificateIcon";
import {LicenseIcon}     from "@/puff-smith/component/icon/LicenseIcon";
import {
	CreateMenuItem,
	IMenuProps,
	ListIcon,
	Menu
}                        from "@leight-core/viv";
import {FC}              from "react";

export interface IUserMenuProps extends Partial<IMenuProps> {
}

export const UserMenu: FC<IUserMenuProps> = props => <Menu
	style={{border: "none"}}
	mode={"horizontal"}
	items={[
		CreateMenuItem({
			title: "root.user.list",
			href:  "/root/user",
			icon:  <ListIcon/>,
		}),
		CreateMenuItem({
			title: "root.user.certificate.pending.list",
			href:  "/root/user/certificate/pending",
			icon:  <CertificateIcon/>,
		}),
		CreateMenuItem({
			title: "root.user.license.pending.list",
			href:  "/root/user/license/pending",
			icon:  <LicenseIcon/>,
		}),
	]}
	{...props}
/>;
