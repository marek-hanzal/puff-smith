import {FC} from "react";
import {Menu} from "antd";
import {MenuOutlined} from "@ant-design/icons";
import {MixtureActiveButton, MixtureCommentButton, MixtureEditButton, MixtureLinkButton, MixturePreviewButton} from "@/puff-smith/site/lab/mixture";
import {DrawerButton} from "@leight-core/leight";
import {MixtureDto} from "@/sdk/puff-smith/mixture/dto";
import {IDrawerButtonProps} from "@leight-core/leight/dist";
import {useTranslation} from "react-i18next";

export interface IMixtureQuickMenuProps extends Partial<IDrawerButtonProps> {
	mixture: MixtureDto;
}

export const MixtureQuickMenu: FC<IMixtureQuickMenuProps> = ({mixture, ...props}) => {
	const {t} = useTranslation();
	return <DrawerButton
		type={'text'}
		drawerProps={{
			title: t('lab.mixture.context.menu', {data: mixture}),
			bodyStyle: {padding: 0}
		}}
		width={350}
		icon={<MenuOutlined/>}
		{...props}
	>
		<Menu selectable={false}>
			<Menu.Item>
				<MixtureLinkButton mixture={mixture}/>
			</Menu.Item>
			<Menu.Divider/>
			<Menu.Item>
				<MixturePreviewButton mixture={mixture}/>
			</Menu.Item>
			<Menu.Item>
				<MixtureCommentButton mixture={mixture}/>
			</Menu.Item>
			<Menu.Item>
				<MixtureEditButton mixture={mixture}/>
			</Menu.Item>
			<Menu.Divider/>
			<Menu.Item>
				<MixtureActiveButton mixture={mixture}/>
			</Menu.Item>
		</Menu>
	</DrawerButton>
}
