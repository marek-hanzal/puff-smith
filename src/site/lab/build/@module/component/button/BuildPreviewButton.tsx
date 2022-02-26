import {DrawerButton, IDrawerButtonProps} from "@leight-core/common";
import {BuildDto} from "@/sdk/puff-smith/build/dto";
import {FC} from "react";
import {BuildIcon} from "@/puff-smith";
import {ExportOutlined} from "@ant-design/icons";
import {BuildPreview, IBuildPreviewProps} from "@/puff-smith/site/lab/build/@module/component/BuildPreview";
import {BuildLinkButton} from "@/puff-smith/site/lab/build/@module/component/button/BuildLinkButton";

export interface IBuildPreviewButtonProps extends Partial<IDrawerButtonProps> {
	build: BuildDto;
	buildPreviewProps?: Partial<IBuildPreviewProps>;
}

export const BuildPreviewButton: FC<IBuildPreviewButtonProps> = ({build, buildPreviewProps, ...props}) => {
	return <>
		<DrawerButton
			type={'link'}
			size={'large'}
			icon={<BuildIcon/>}
			title={'lab.build.preview'}
			{...props}
		>
			<BuildPreview
				forceList
				hidden={['upload']}
				{...buildPreviewProps}
				build={build}
			/>
		</DrawerButton>
		<BuildLinkButton
			size={'small'}
			title={null}
			icon={<ExportOutlined/>}
			build={build}
		/>
	</>
}
