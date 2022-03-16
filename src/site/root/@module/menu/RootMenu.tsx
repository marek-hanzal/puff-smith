import {ImportIcon, JobIcon, LabIcon} from "@/puff-smith";
import {FileOutlined, GlobalOutlined, UnlockOutlined, UserOutlined} from "@ant-design/icons";
import {CreateMenuItem, HomeIcon, IMenuProps, Menu, SubMenu} from "@leight-core/client";
import {FC} from "react";

export interface IRootMenuProps extends Partial<IMenuProps> {
}

export const RootMenu: FC<IRootMenuProps> = props => {
	return <Menu style={{backgroundColor: 'transparent'}} mode={'horizontal'}>
		{CreateMenuItem("root.home.menu", "/root", <HomeIcon/>)}
		{CreateMenuItem("root.import.menu", "/root/import", <ImportIcon/>)}
		{CreateMenuItem("root.job.menu", "/root/job", <JobIcon/>)}
		{CreateMenuItem("root.file.menu", "/root/file", <FileOutlined/>)}
		{CreateMenuItem("root.user.menu", "/root/user", <UserOutlined/>)}
		<SubMenu
			key={"root.sites"}
			id={"root.sites"}
			icon={<GlobalOutlined/>}
		>
			{CreateMenuItem("root.lab.menu", "/lab", <LabIcon/>)}
			{CreateMenuItem("root.public.menu", "/public", <UnlockOutlined/>)}
		</SubMenu>
	</Menu>;
};
