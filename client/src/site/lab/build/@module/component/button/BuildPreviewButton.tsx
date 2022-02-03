import {DrawerButton, IDrawerButtonProps, PreviewTemplate} from "@leight-core/leight";
import {BuildDto} from "@/sdk/puff-smith/build/dto";
import {FC} from "react";
import {EyeOutlined} from "@ant-design/icons";
import {BuildIcon} from "@/puff-smith";
import {BuildCloneButton, BuildEditButton, BuildPreview, BuildVapeButton} from "@/puff-smith/site/lab/build";
import {AtomizerInline} from "@/puff-smith/site/lab/atomizer";
import {Divider, Rate, Space} from "antd";

export interface IBuildPreviewButtonProps extends Partial<IDrawerButtonProps> {
	build: BuildDto;
}

export const BuildPreviewButton: FC<IBuildPreviewButtonProps> = ({build, ...props}) => {
	return <DrawerButton
		width={800}
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
			subTitle={<Rate count={10} disabled value={build.rating || undefined}/>}
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
