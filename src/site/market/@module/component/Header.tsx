import {LogoIcon, LogoutButton} from "@/puff-smith";
import {Divider, PageHeader, PageHeaderProps} from "antd";
import {ButtonBar, LinkTo} from "@leight-core/client";
import {FC} from "react";
import {MarketMenu} from "@/puff-smith/site/market";
import {UserPuffies} from "@/puff-smith/site/shared/user";

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
			minHeight: '8vh',
		}}
		extra={<ButtonBar split={<Divider type={'vertical'}/>}>
			<UserPuffies/>
			<LogoutButton/>
		</ButtonBar>}
		{...props}
	/>
};
