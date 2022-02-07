import {DrawerButton, IDrawerButtonProps, PreviewTemplate} from "@leight-core/leight";
import {ModDto} from "@/sdk/puff-smith/mod/dto";
import {FC} from "react";
import {ModIcon} from "@/puff-smith";
import {ModPreview} from "@/puff-smith/site/lab/mod";

export interface IModPreviewButtonProps extends Partial<IDrawerButtonProps> {
	mod: ModDto;
}

export const ModPreviewButton: FC<IModPreviewButtonProps> = ({mod, ...props}) => {
	return <DrawerButton
		type={'link'}
		size={'large'}
		icon={<ModIcon/>}
		title={'lab.mod.preview'}
		{...props}
	>
		<PreviewTemplate
			icon={<ModIcon/>}
			label={'lab.mod.preview'}
			title={mod.name}
			subTitle={mod.vendor.name}
			span={24}
		>
			<ModPreview mod={mod}/>
		</PreviewTemplate>
	</DrawerButton>;
}
