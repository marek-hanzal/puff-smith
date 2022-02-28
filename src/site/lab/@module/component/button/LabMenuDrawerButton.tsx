import {DrawerButton, IDrawerButtonProps} from "@leight-core/component";
import {FC} from "react";
import {MenuOutlined} from "@ant-design/icons";
import {ILabMenuProps, LabMenu} from "../../menu";
import {LogoIcon} from "@/puff-smith";
import {useTranslation} from "react-i18next";

export interface ILabMenuDrawerButtonProps extends Partial<IDrawerButtonProps> {
	labMenuProps?: ILabMenuProps;
}

export const LabMenuDrawerButton: FC<ILabMenuDrawerButtonProps> = ({labMenuProps, children, ...props}) => {
	const {t} = useTranslation();
	return <DrawerButton
		type={'text'}
		icon={<MenuOutlined/>}
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
