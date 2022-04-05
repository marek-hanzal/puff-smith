import {LogoIcon, SignOutButton} from "@/puff-smith";
import {RootMenu} from "@/puff-smith/site/root";
import {LinkTo} from "@leight-core/client";
import {PageHeader, PageHeaderProps} from "antd";
import {FC} from "react";

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
			minHeight: "8vh",
		}}
		extra={[
			<SignOutButton key={"logout"}/>,
		]}
		{...props}
	/>;
};
