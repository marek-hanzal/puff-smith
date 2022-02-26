import {FC} from "react";
import {CellDto} from "@/sdk/puff-smith/cell/dto";
import {Menu} from "antd";
import {useTranslation} from "react-i18next";
import {DrawerMenu, IDrawerMenuProps} from "@leight-core/common";
import {CellPreviewButton} from "@/puff-smith/site/lab/cell/@module/component/button/CellPreviewButton";
import {CellEditButton} from "@/puff-smith/site/lab/cell/@module/component/button/CellEditButton";
import {CellDeleteButton} from "@/puff-smith/site/lab/cell/@module/component/button/CellDeleteButton";

export interface ICellQuickMenuProps extends Partial<IDrawerMenuProps> {
	cell: CellDto;
}

export const CellQuickMenu: FC<ICellQuickMenuProps> = ({cell, ...props}) => {
	const {t} = useTranslation();
	return <DrawerMenu
		header={t('lab.cell.context.menu', {data: cell})}
		{...props}
	>
		<Menu.Item>
			<CellPreviewButton cell={cell}/>
		</Menu.Item>
		<Menu.Divider/>
		<Menu.Item>
			<CellEditButton cell={cell}/>
		</Menu.Item>
		<Menu.Divider/>
		<Menu.Item>
			<CellDeleteButton cell={cell}/>
		</Menu.Item>
	</DrawerMenu>
}
