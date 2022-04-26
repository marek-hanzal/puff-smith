import {SignOutButton} from "@/puff-smith/component/button/SignOutButton";
import {LogoIcon} from "@/puff-smith/component/icon/LogoIcon";
import {MarketMenu} from "@/puff-smith/site/market/@module/menu/MarketMenu";
import {UserPuffies} from "@/puff-smith/site/shared/user/@module/component/UserPuffies";
import {ButtonBar, LinkTo} from "@leight-core/client";
import {Divider, PageHeader, PageHeaderProps} from "antd";
import {FC} from "react";

export interface IHeaderProps extends Partial<PageHeaderProps> {
}

export const Header: FC<IHeaderProps> = props => {
	return <PageHeader
		ghost
		title={<LinkTo href={"/market"}>
			<LogoIcon height={64}/>
		</LinkTo>}
		subTitle={<MarketMenu/>}
		style={{
			minHeight: "8vh",
		}}
		extra={<ButtonBar split={<Divider type={"vertical"}/>}>
			<UserPuffies/>
			<SignOutButton/>
		</ButtonBar>}
		{...props}
	/>;
};
