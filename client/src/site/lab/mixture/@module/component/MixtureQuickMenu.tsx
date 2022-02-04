import {FC} from "react";
import {Menu} from "antd";
import {EyeOutlined} from "@ant-design/icons";
import {MixtureIcon} from "@/puff-smith";
import {MixtureActiveButton, MixtureCommentButton, MixtureEditButton, MixtureInline, MixtureLinkButton, MixturePreview} from "@/puff-smith/site/lab/mixture";
import {DrawerButton, IQuickMenuProps, PreviewTemplate, QuickMenu} from "@leight-core/leight";
import {MixtureDto} from "@/sdk/puff-smith/mixture/dto";

export interface IMixtureQuickMenuProps extends Partial<IQuickMenuProps> {
	mixture: MixtureDto;
}

export const MixtureQuickMenu: FC<IMixtureQuickMenuProps> = ({mixture, ...props}) => {
	return <QuickMenu {...props}>
		<Menu.Item>
			<MixtureLinkButton mixture={mixture}/>
		</Menu.Item>
		<Menu.Divider/>
		<Menu.Item>
			<DrawerButton
				width={750}
				type={'link'}
				size={'large'}
				title={'lab.mixture.preview'}
				icon={<EyeOutlined/>}
			>
				<PreviewTemplate
					icon={<MixtureIcon/>}
					title={<MixtureInline mixture={mixture}/>}
					span={24}
				>
					<MixturePreview mixture={mixture}/>
				</PreviewTemplate>
			</DrawerButton>
		</Menu.Item>
		<Menu.Item>
			<MixtureCommentButton mixture={mixture}/>
		</Menu.Item>
		<Menu.Item>
			<MixtureEditButton mixture={mixture}/>
		</Menu.Item>
		<Menu.Item>
			<MixtureActiveButton mixture={mixture}/>
		</Menu.Item>
	</QuickMenu>
}
