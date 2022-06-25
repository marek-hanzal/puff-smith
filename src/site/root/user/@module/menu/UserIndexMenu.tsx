import {CertificateIcon} from "@/puff-smith/component/icon/CertificateIcon";
import {LicenseIcon} from "@/puff-smith/component/icon/LicenseIcon";
import {PurchaseIcon} from "@/puff-smith/component/icon/PurchaseIcon";
import {UserIcon} from "@/puff-smith/component/icon/UserIcon";
import {IUser} from "@/puff-smith/service/user/interface";
import {CreateMenuItem, IMenuProps, Menu} from "@leight-core/client";
import {FC} from "react";

export interface IUserIndexMenuProps extends Partial<IMenuProps> {
	user: IUser;
}

export const UserIndexMenu: FC<IUserIndexMenuProps> = ({user, ...props}) => {
	const query = {userId: user.id};
	return <Menu
		style={{border: "none"}}
		mode={"horizontal"}
		items={[
			CreateMenuItem({
				title: "root.user.index.menu",
				href: "/root/user/[userId]",
				icon: <UserIcon/>,
				query,
			}),
			CreateMenuItem({
				title: "root.user.transactions.menu",
				href: "/root/user/[userId]/transactions",
				icon: <PurchaseIcon/>,
				query,
			}),
			CreateMenuItem({
				title: "root.user.certificates.menu",
				href: "/root/user/[userId]/certificates",
				icon: <CertificateIcon/>,
				query,
			}),
			CreateMenuItem({
				title: "root.user.licenses.menu",
				href: "/root/user/[userId]/licenses",
				icon: <LicenseIcon/>,
				query,
			}),
		]}
		{...props}
	/>;
};
