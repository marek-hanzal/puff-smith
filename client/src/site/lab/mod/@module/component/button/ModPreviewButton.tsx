import {DrawerButton, IDrawerButtonProps} from "@leight-core/leight";
import {ModDto} from "@/sdk/puff-smith/mod/dto";
import {FC} from "react";
import {ModIcon} from "@/puff-smith";
import {ModLinkButton, ModPreview} from "@/puff-smith/site/lab/mod";
import {ExportOutlined} from "@ant-design/icons";

export interface IModPreviewButtonProps extends Partial<IDrawerButtonProps> {
	mod: ModDto;
}

export const ModPreviewButton: FC<IModPreviewButtonProps> = ({mod, ...props}) => {
	return <>
		<DrawerButton
			type={'link'}
			size={'large'}
			icon={<ModIcon/>}
			title={'lab.mod.preview'}
			{...props}
		>
			<ModPreview mod={mod}/>
		</DrawerButton>
		<ModLinkButton
			size={'small'}
			title={null}
			icon={<ExportOutlined/>}
			mod={mod}
		/>
	</>
}
