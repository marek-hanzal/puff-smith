import {ImportIcon} from "@/puff-smith/component/icon/ImportIcon";
import {JobIcon} from "@/puff-smith/component/icon/JobIcon";
import {LabIcon} from "@/puff-smith/component/icon/LabIcon";
import {MarketIcon} from "@/puff-smith/component/icon/MarketIcon";
import {PublicIcon} from "@/puff-smith/component/icon/PublicIcon";
import {SitesIcon} from "@/puff-smith/component/icon/SitesIcon";
import {UserIcon} from "@/puff-smith/component/icon/UserIcon";
import {CodeOutlined} from "@ant-design/icons";
import {CreateMenuGroup, CreateMenuItem, FileIcon, HomeIcon, IMenuProps, Menu} from "@leight-core/client";
import {FC} from "react";

export interface IRootMenuProps extends Partial<IMenuProps> {
}

export const RootMenu: FC<IRootMenuProps> = props => <Menu
	style={{backgroundColor: "transparent", minWidth: "50vw"}}
	mode={"horizontal"}
	items={[
		CreateMenuItem("root.home.menu", "/root", <HomeIcon/>),
		CreateMenuItem("root.import.menu", "/root/import", <ImportIcon/>),
		CreateMenuItem("root.job.menu", "/root/job", <JobIcon/>),
		CreateMenuItem("root.file.menu", "/root/file", <FileIcon/>),
		CreateMenuItem("root.user.menu", "/root/user", <UserIcon/>),
		CreateMenuGroup("root.sites.menu", <SitesIcon/>, [
			CreateMenuItem("root.market.menu", "/to/market", <MarketIcon/>),
			CreateMenuItem("root.lab.menu", "/to/lab", <LabIcon/>),
			CreateMenuItem("root.public.menu", "/to/public", <PublicIcon/>),
			{type: "divider"},
			CreateMenuItem("root.sdk.generate.menu", "/api/sdk/generate", <CodeOutlined/>),
		]),
	]}
	{...props}
/>;
