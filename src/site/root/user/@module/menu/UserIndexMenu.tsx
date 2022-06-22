import {CertificateIcon} from "@/puff-smith/component/icon/CertificateIcon";
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
			CreateMenuItem("root.user.index.menu", "/root/user/[userId]", <UserIcon/>, query),
			CreateMenuItem("root.user.transactions.menu", "/root/user/[userId]/transactions", <PurchaseIcon/>, query),
			CreateMenuItem("root.user.certificates.menu", "/root/user/[userId]/certificates", <CertificateIcon/>, query),
		]}
		{...props}
	/>;
};
