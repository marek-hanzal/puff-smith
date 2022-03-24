import {DrawerButton, IDrawerButtonProps, MenuIcon} from "@leight-core/client";
import {FC} from "react";
import {LogoIcon} from "@/puff-smith";
import {useTranslation} from "react-i18next";
import {ILabMenuProps, LabMenu} from "@/puff-smith/site/lab";

export interface ILabMenuDrawerButtonProps extends Partial<IDrawerButtonProps> {
	labMenuProps?: ILabMenuProps;
}

export const LabMenuDrawerButton: FC<ILabMenuDrawerButtonProps> = ({labMenuProps, children, ...props}) => {
	const {t} = useTranslation();
	return <DrawerButton
		type={'text'}
		icon={<MenuIcon/>}
		drawerProps={{
			title: t('lab.drawer.menu'),
			extra: <LogoIcon/>,
			bodyStyle: {padding: '2px 4px'},
		}}
		{...props}
	>
		<LabMenu prepend={children} {...labMenuProps} inlineCollapsed={false}/>
	</DrawerButton>;
}
