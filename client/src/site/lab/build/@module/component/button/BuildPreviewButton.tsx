import {DrawerButton, IDrawerButtonProps, PreviewTemplate} from "@leight-core/leight";
import {BuildDto} from "@/sdk/puff-smith/build/dto";
import {FC} from "react";
import {BuildIcon} from "@/puff-smith";
import {BuildPreview} from "@/puff-smith/site/lab/build";

export interface IBuildPreviewButtonProps extends Partial<IDrawerButtonProps> {
	build: BuildDto;
}

export const BuildPreviewButton: FC<IBuildPreviewButtonProps> = ({build, ...props}) => {
	return <DrawerButton
		type={'link'}
		size={'large'}
		icon={<BuildIcon/>}
		title={'lab.build.preview'}
		{...props}
	>
		<PreviewTemplate
			icon={<></>}
			title={build.atomizer.name}
			subTitle={build.coil.wire.name}
			span={24}
		>
			<BuildPreview build={build}/>
		</PreviewTemplate>
	</DrawerButton>;
}
