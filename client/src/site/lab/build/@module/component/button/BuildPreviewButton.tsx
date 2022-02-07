import {DrawerButton, IDrawerButtonProps, PreviewTemplate} from "@leight-core/leight";
import {BuildDto} from "@/sdk/puff-smith/build/dto";
import {FC} from "react";
import {EyeOutlined} from "@ant-design/icons";
import {BuildIcon} from "@/puff-smith";
import {BuildCloneButton, BuildEditButton, BuildPreview, BuildVapeButton} from "@/puff-smith/site/lab/build";
import {AtomizerInline} from "@/puff-smith/site/lab/atomizer";
import {Divider, Space} from "antd";
import {CoilInline} from "@/puff-smith/site/lab/coil";

export interface IBuildPreviewButtonProps extends Partial<IDrawerButtonProps> {
	build: BuildDto;
}

export const BuildPreviewButton: FC<IBuildPreviewButtonProps> = ({build, ...props}) => {
	return <DrawerButton
		type={'link'}
		size={'large'}
		icon={<EyeOutlined/>}
		title={'lab.build.preview'}
		{...props}
	>
		<PreviewTemplate
			icon={<BuildIcon/>}
			label={'lab.build.preview'}
			title={<AtomizerInline atomizer={build.atomizer}/>}
			subTitle={<CoilInline coil={build.coil}/>}
			span={24}
			extra={<>
				<Space>
					<BuildEditButton build={build}/>
					<BuildCloneButton build={build}/>
					<BuildVapeButton build={build}/>
				</Space>
				<Divider/>
			</>}
		>
			<BuildPreview build={build}/>
		</PreviewTemplate>
	</DrawerButton>;
}
