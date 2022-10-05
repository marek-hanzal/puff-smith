import {ImportIcon}      from "@/puff-smith/component/icon/ImportIcon";
import {JobIcon}         from "@/puff-smith/component/icon/JobIcon";
import {LabIcon}         from "@/puff-smith/component/icon/LabIcon";
import {MarketIcon}      from "@/puff-smith/component/icon/MarketIcon";
import {PublicIcon}      from "@/puff-smith/component/icon/PublicIcon";
import {SitesIcon}       from "@/puff-smith/component/icon/SitesIcon";
import {TranslationIcon} from "@/puff-smith/component/icon/TranslationIcon";
import {UserIcon}        from "@/puff-smith/component/icon/UserIcon";
import {CodeOutlined}    from "@ant-design/icons";
import {
	BrowserContent,
	CreateMenuGroup,
	CreateMenuItem,
	FileIcon,
	Menu,
	MobileContent,
	MobileMenu
}                        from "@leight-core/client";
import {FC}              from "react";

export interface IRootMenuProps {
}

export const RootMenu: FC<IRootMenuProps> = props => <>
	<BrowserContent>
		<Menu
			style={{backgroundColor: "transparent", minWidth: "50vw"}}
			mode={"horizontal"}
			items={[
				CreateMenuItem({
					title: "root.import.menu",
					href:  "/root/import",
					icon:  <ImportIcon/>,
				}),
				CreateMenuItem({
					title: "root.job.menu",
					href:  "/root/job/running",
					icon:  <JobIcon/>,
				}),
				CreateMenuItem({
					title: "root.file.menu",
					href:  "/root/file",
					icon:  <FileIcon/>,
				}),
				CreateMenuItem({
					title: "root.user.menu",
					href:  "/root/user",
					icon:  <UserIcon/>,
				}),
				CreateMenuGroup({
					title: "root.sites.menu",
					icon:  <SitesIcon/>,
					items: [
						CreateMenuItem({
							title: "root.market.menu",
							href:  "/to/market",
							icon:  <MarketIcon/>,
						}),
						CreateMenuItem({
							title: "root.lab.menu",
							href:  "/to/lab",
							icon:  <LabIcon/>,
						}),
						CreateMenuItem({
							title: "root.public.menu",
							href:  "/to/public",
							icon:  <PublicIcon/>,
						}),
						{type: "divider"},
						process.env.NODE_ENV === "development" ? CreateMenuItem({
							title: "root.sdk.generate.menu",
							href:  "/api/sdk/generate",
							icon:  <CodeOutlined/>,
						}) : null,
					],
				}),
			]}
			{...props}
		/>
	</BrowserContent>
	<MobileContent>
		<MobileMenu
			title={"root.misc.menu"}
			items={[
				{
					label: "root.import.menu",
					icon:  <ImportIcon/>,
					href:  "/root/import",
				},
				{
					label: "root.job.menu",
					icon:  <JobIcon/>,
					href:  "/root/job/all",
				},
				{
					label: "root.translation.menu",
					icon:  <TranslationIcon/>,
					href:  "/root/translation",
				},
			]}
		/>
	</MobileContent>
</>;
