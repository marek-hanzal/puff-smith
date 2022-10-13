import {SignOutButton} from "@/puff-smith/component/button/SignOutButton";
import {LogoIcon}      from "@/puff-smith/component/icon/LogoIcon";
import {RootMenu}      from "@/puff-smith/site/root/@module/menu/RootMenu";
import {LinkTo}        from "@leight-core/viv";
import {
	PageHeader,
	PageHeaderProps
}                      from "antd";
import {FC}            from "react";

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
		extra={<SignOutButton/>}
		{...props}
	/>;
};
