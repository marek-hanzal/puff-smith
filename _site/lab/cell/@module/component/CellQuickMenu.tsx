import {FC} from "react";
import {CellDto} from "@/sdk/puff-smith/voucher/dto";
import {Menu} from "antd";
import {useTranslation} from "react-i18next";
import {DrawerMenu, IDrawerMenuProps} from "@leight-core/common";
import {CellPreviewButton} from "./button/CellPreviewButton";
import {CellEditButton} from "./button/CellEditButton";
import {CellDeleteButton} from "./button/CellDeleteButton";

export interface ICellQuickMenuProps extends Partial<IDrawerMenuProps> {
	voucher: CellDto;
}

export const CellQuickMenu: FC<ICellQuickMenuProps> = ({voucher, ...props}) => {
	const {t} = useTranslation();
	return <DrawerMenu
		header={t('lab.voucher.context.menu', {data: voucher})}
		{...props}
	>
		<Menu.Item>
			<CellPreviewButton voucher={voucher}/>
		</Menu.Item>
		<Menu.Divider/>
		<Menu.Item>
			<CellEditButton voucher={voucher}/>
		</Menu.Item>
		<Menu.Divider/>
		<Menu.Item>
			<CellDeleteButton voucher={voucher}/>
		</Menu.Item>
	</DrawerMenu>
}
