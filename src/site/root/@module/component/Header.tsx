import {LogoIcon, LogoutButton} from "@/puff-smith";
import {PageHeader, PageHeaderProps} from "antd";
import {LinkTo} from "@leight-core/client";
import {FC} from "react";
import {RootMenu} from "@/puff-smith/site/root";

export interface IHeaderProps extends Partial<PageHeaderProps> {
}

export const Header: FC<IHeaderProps> = props => {
	return <PageHeader
		ghost
		title={<LinkTo href={"/root"}>
			<LogoIcon height={64}/>
		</LinkTo>}
		subTitle={<RootMenu/>}
		style={{
			minHeight: '8vh',
		}}
		extra={[
			<LogoutButton key={'logout'}/>,
		]}
		{...props}
	/>
};
