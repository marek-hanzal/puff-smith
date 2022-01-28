import {DrawerButton, IDrawerButtonProps, PreviewTemplate} from "@leight-core/leight/dist";
import {BuildDto} from "@/sdk/puff-smith/build/dto";
import {FC} from "react";
import {EyeOutlined} from "@ant-design/icons";
import {BuildIcon} from "@/puff-smith";
import {BuildPreview} from "@/puff-smith/site/lab/build";

export interface IBuildPreviewButtonProps extends Partial<IDrawerButtonProps> {
	build: BuildDto;
}

export const BuildPreviewButton: FC<IBuildPreviewButtonProps> = ({build, ...props}) => {
	return <DrawerButton
		width={750}
		type={'link'}
		size={'large'}
		icon={<EyeOutlined/>}
		title={'lab.build.preview'}
		{...props}
	>
		<PreviewTemplate
			icon={<BuildIcon/>}
			label={'lab.build.preview'}
			span={24}
		>
			<BuildPreview build={build}/>
		</PreviewTemplate>
	</DrawerButton>;
}
