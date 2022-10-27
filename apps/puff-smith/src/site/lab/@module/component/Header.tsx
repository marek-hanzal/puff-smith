import {SignOutButton} from "@/puff-smith/component/button/SignOutButton";
import {LogoIcon}      from "@/puff-smith/component/icon/LogoIcon";
import {LabMenu}       from "@/puff-smith/site/lab/@module/menu/LabMenu";
import {UserPuffies}   from "@/puff-smith/site/shared/user/@module/component/UserPuffies";
import {
	ButtonBar,
	LinkTo
}                      from "@leight-core/viv";
import {
	Divider,
	PageHeader,
	PageHeaderProps
}                      from "antd";
import {FC}            from "react";

export interface IHeaderProps extends Partial<PageHeaderProps> {
}

export const Header: FC<IHeaderProps> = props => {
	return <PageHeader
		ghost
		title={<LinkTo href={"/lab"}>
			<LogoIcon height={64}/>
		</LinkTo>}
		subTitle={<LabMenu/>}
		style={{
			minHeight: "8vh",
		}}
		extra={<ButtonBar split={<Divider type={"vertical"}/>}>
			<UserPuffies/>
			{/*<WishlistButton/>*/}
			<SignOutButton/>
		</ButtonBar>}
		{...props}
	/>;
};
