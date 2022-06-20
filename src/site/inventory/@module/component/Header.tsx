import {SignOutButton} from "@/puff-smith/component/button/SignOutButton";
import {LogoIcon} from "@/puff-smith/component/icon/LogoIcon";
import {InventoryMenu} from "@/puff-smith/site/inventory/@module/menu/InventoryMenu";
import {UserPuffies} from "@/puff-smith/site/shared/user/@module/component/UserPuffies";
import {WishlistButton} from "@/puff-smith/site/shared/wishlist/@module/button/WishlistButton";
import {ButtonBar, LinkTo} from "@leight-core/client";
import {Divider, PageHeader, PageHeaderProps} from "antd";
import {FC} from "react";

export interface IHeaderProps extends Partial<PageHeaderProps> {
}

export const Header: FC<IHeaderProps> = props => {
	return <PageHeader
		ghost
		title={<LinkTo href={"/inventory"}>
			<LogoIcon height={64}/>
		</LinkTo>}
		subTitle={<InventoryMenu/>}
		style={{
			minHeight: "8vh",
		}}
		extra={<ButtonBar split={<Divider type={"vertical"}/>}>
			<UserPuffies/>
			<WishlistButton/>
			<SignOutButton/>
		</ButtonBar>}
		{...props}
	/>;
};
