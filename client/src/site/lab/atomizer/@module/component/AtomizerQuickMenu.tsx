import {FC} from "react";
import {AtomizerDto} from "@/sdk/puff-smith/atomizer/dto";
import {Menu} from "antd";
import {useTranslation} from "react-i18next";
import {ButtonLink, DrawerMenu, IDrawerMenuProps} from "@leight-core/leight";
import {BuildIcon} from "@/puff-smith";
import {AtomizerPreviewButton} from "@/puff-smith/site/lab/atomizer/@module/component/button/AtomizerPreviewButton";
import {AtomizerEditButton} from "@/puff-smith/site/lab/atomizer/@module/component/button/AtomizerEditButton";
import {AtomizerDeleteButton} from "@/puff-smith/site/lab/atomizer/@module/component/button/AtomizerDeleteButton";

export interface IAtomizerQuickMenuProps extends Partial<IDrawerMenuProps> {
	atomizer: AtomizerDto;
}

export const AtomizerQuickMenu: FC<IAtomizerQuickMenuProps> = ({atomizer, ...props}) => {
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
			<ButtonLink
				type={'link'}
				size={'large'}
				icon={<BuildIcon/>}
				href={'/lab/build/create'}
				query={{atomizerId: atomizer.id}}
				title={'lab.atomizer.build.create'}
			/>
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
