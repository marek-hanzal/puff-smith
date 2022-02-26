import {CommonIcon, ImportIcon, JobIcon, LabIcon, UpgradeIcon} from "@/puff-smith";
import {ArrowRightOutlined, CodeOutlined, ExportOutlined, FileOutlined, GlobalOutlined, RiseOutlined, UnlockOutlined, UserOutlined} from "@ant-design/icons";
import {CreateMenuItem, HomeIcon, IMenuProps, Menu, MenuDivider, SimpleMenuItem, SubMenu} from "@leight-core/common";
import {FC} from "react";
import {useTranslation} from "react-i18next";

export interface IRootMenuProps extends Partial<IMenuProps> {
}

export const RootMenu: FC<IRootMenuProps> = props => {
	const {t} = useTranslation();
	return <Menu {...props}>
		<MenuDivider/>
		{CreateMenuItem("root.home.menu", "/root", <HomeIcon/>)}
		<MenuDivider/>
		{CreateMenuItem("root.settings.menu", "/root/settings", <ArrowRightOutlined/>)}
		{CreateMenuItem("root.import.index.menu", "/root/import", <ImportIcon/>)}
		{CreateMenuItem("root.job.index.menu", "/root/job", <JobIcon/>)}
		{CreateMenuItem("root.common.index.menu", "/root/common", <CommonIcon/>)}
		{CreateMenuItem("root.upgrade.index.menu", "/root/upgrade", <UpgradeIcon/>)}
		{CreateMenuItem("root.file.menu", "/root/file/list", <FileOutlined/>)}
		{CreateMenuItem("root.profiler.menu", "/root/profiler/list", <RiseOutlined/>)}
		{CreateMenuItem("root.user.menu", "/root/user", <UserOutlined/>)}
		<SubMenu
			key={"root.sites"}
			id={"root.sites"}
			icon={<GlobalOutlined/>}
		>
			{CreateMenuItem("root.lab.menu", "/lab", <LabIcon/>)}
			{CreateMenuItem("root.public.menu", "/public", <UnlockOutlined/>)}
		</SubMenu>
		<SubMenu
			key={"root.external"}
			id={"root.external"}
			icon={<ExportOutlined/>}
		>
			<SimpleMenuItem key={"download-sdk"} icon={<CodeOutlined/>}>
				<a target={"_blank"} href={"/puff-smith/api/root/sdk/download"} rel="noreferrer">{t("root.download-sdk.menu")}</a>
			</SimpleMenuItem>
			<SimpleMenuItem key={"discovery"} icon={<GlobalOutlined/>}>
				<a target={"_blank"} href={"/puff-smith/api/shared/discovery"} rel="noreferrer">{t("root.discovery.menu")}</a>
			</SimpleMenuItem>
		</SubMenu>
	</Menu>;
};
