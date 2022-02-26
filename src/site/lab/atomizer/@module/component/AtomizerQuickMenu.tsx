import {FC} from "react";
import {AtomizerDto} from "@/sdk/puff-smith/atomizer/dto";
import {Menu} from "antd";
import {useTranslation} from "react-i18next";
import {DrawerMenu, IDrawerMenuProps, IFormOnSuccess} from "@leight-core/common";
import {AtomizerPreviewButton} from "@/puff-smith/site/lab/atomizer/@module/component/button/AtomizerPreviewButton";
import {AtomizerEditButton} from "@/puff-smith/site/lab/atomizer/@module/component/button/AtomizerEditButton";
import {AtomizerDeleteButton} from "@/puff-smith/site/lab/atomizer/@module/component/button/AtomizerDeleteButton";
import {PurchaseAtomizer} from "@/puff-smith/site/lab/user/atomizer/@module/component/button/PurchaseAtomizer";
import {UserAtomizerDto} from "@/sdk/puff-smith/user/dto/atomizer";
import {AtomizerCommentButton} from "@/puff-smith/site/lab/atomizer/@module/component/button/AtomizerCommentButton";

export interface IAtomizerQuickMenuProps extends Partial<IDrawerMenuProps> {
	atomizer: AtomizerDto;
	onPurchase?: IFormOnSuccess<any, UserAtomizerDto>;
}

export const AtomizerQuickMenu: FC<IAtomizerQuickMenuProps> = ({atomizer, onPurchase, ...props}) => {
	const {t} = useTranslation();
	return <DrawerMenu
		header={t('lab.atomizer.context.menu', {data: atomizer})}
		{...props}
	>
		<Menu.Item>
			<AtomizerPreviewButton atomizer={atomizer}/>
		</Menu.Item>
		<Menu.Divider/>
		<Menu.Item>
			<PurchaseAtomizer onPurchase={onPurchase} atomizer={atomizer}/>
		</Menu.Item>
		<Menu.Item>
			<AtomizerCommentButton atomizer={atomizer}/>
		</Menu.Item>
		<Menu.Item>
			<AtomizerEditButton atomizer={atomizer}/>
		</Menu.Item>
		<Menu.Divider/>
		<Menu.Item>
			<AtomizerDeleteButton atomizer={atomizer}/>
		</Menu.Item>
	</DrawerMenu>
}
