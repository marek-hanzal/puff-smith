import {DrawerButton, IDrawerButtonProps} from "@leight-core/leight";
import {BuildDto} from "@/sdk/puff-smith/build/dto";
import {FC} from "react";
import {BuildIcon} from "@/puff-smith";
import {BuildPreview, IBuildPreviewProps} from "@/puff-smith/site/lab/build";

export interface IBuildPreviewButtonProps extends Partial<IDrawerButtonProps> {
	build: BuildDto;
	buildPreviewProps?: Partial<IBuildPreviewProps>;
}

export const BuildPreviewButton: FC<IBuildPreviewButtonProps> = ({build, buildPreviewProps, ...props}) => {
	return <DrawerButton
		type={'link'}
		size={'large'}
		icon={<BuildIcon/>}
		title={'lab.build.preview'}
		{...props}
	>
		<BuildPreview
			forceList
			hidden={['upload', 'images']}
			{...buildPreviewProps}
			build={build}
		/>
	</DrawerButton>;
}
