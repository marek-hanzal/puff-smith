import {LogoIcon} from "@/puff-smith";
import {PublicMenu} from "@/puff-smith/site/public";
import {LinkTo} from "@leight-core/client";
import {PageHeader, PageHeaderProps} from "antd";
import {FC} from "react";

export interface IHeaderProps extends Partial<PageHeaderProps> {
}

export const Header: FC<IHeaderProps> = props => {
	return <PageHeader
		ghost
		title={<LinkTo href={"/public"}>
			<LogoIcon height={64}/>
		</LinkTo>}
		subTitle={<PublicMenu/>}
		style={{
			minHeight: "8vh",
		}}
		{...props}
	/>;
};
