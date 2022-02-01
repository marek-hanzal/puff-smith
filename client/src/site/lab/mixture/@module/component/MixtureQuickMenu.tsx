import {FC} from "react";
import {Menu} from "antd";
import {EyeOutlined} from "@ant-design/icons";
import {MixtureIcon} from "@/puff-smith";
import {MixtureActiveButton, MixtureCommentButton, MixtureEditButton, MixtureLinkButton, MixturePreview} from "@/puff-smith/site/lab/mixture";
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
				icon={<EyeOutlined/>}
				title={'lab.mixture.preview'}
			>
				<PreviewTemplate
					icon={<MixtureIcon/>}
					label={'lab.mixture.preview'}
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
