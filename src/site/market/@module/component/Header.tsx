import {LogoIcon} from "@/puff-smith";
import {PageHeader, PageHeaderProps} from "antd";
import {LinkTo} from "@leight-core/client";
import {FC} from "react";
import {MarketMenu} from "@/puff-smith/site/market";

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
		{...props}
	/>
};
