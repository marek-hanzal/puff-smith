import {FC} from "react";
import {Menu} from "antd";
import {useTranslation} from "react-i18next";
import {ButtonLink, DrawerMenu, IDrawerMenuProps} from "@leight-core/leight";
import {BuildIcon} from "@/puff-smith";
import {AtomizerPreviewButton} from "@/puff-smith/site/lab/atomizer/@module/component/button/AtomizerPreviewButton";
import {UserAtomizerDto} from "@/sdk/puff-smith/user/dto/atomizer";
import {UserAtomizerDeleteButton} from "@/puff-smith/site/lab/user/atomizer/@module/component/button/UserAtomizerDeleteButton";
import {UserAtomizerEditButton} from "@/puff-smith/site/lab/user/atomizer/@module/component/button/UserAtomizerEditButton";
import {AtomizerCommentButton} from "@/puff-smith/site/lab/atomizer/@module/component/button/AtomizerCommentButton";

export interface IUserAtomizerQuickMenuProps extends Partial<IDrawerMenuProps> {
	userAtomizer: UserAtomizerDto;
}

export const UserAtomizerQuickMenu: FC<IUserAtomizerQuickMenuProps> = ({userAtomizer, ...props}) => {
	const {t} = useTranslation();
	return <DrawerMenu
		header={t('lab.atomizer.context.menu', {data: userAtomizer.atomizer})}
		{...props}
	>
		<Menu.Item>
			<AtomizerPreviewButton atomizer={userAtomizer.atomizer}/>
		</Menu.Item>
		<Menu.Divider/>
		<Menu.Item>
			<AtomizerCommentButton atomizer={userAtomizer.atomizer}/>
		</Menu.Item>
		<Menu.Item>
			<ButtonLink
				type={'link'}
				size={'large'}
				icon={<BuildIcon/>}
				href={'/lab/build/create'}
				query={{atomizerId: userAtomizer.atomizer.id}}
				title={'lab.atomizer.build.create'}
			/>
		</Menu.Item>
		<Menu.Item>
			<UserAtomizerEditButton userAtomizer={userAtomizer}/>
		</Menu.Item>
		<Menu.Divider/>
		<Menu.Item>
			<UserAtomizerDeleteButton userAtomizer={userAtomizer}/>
		</Menu.Item>
	</DrawerMenu>
}
