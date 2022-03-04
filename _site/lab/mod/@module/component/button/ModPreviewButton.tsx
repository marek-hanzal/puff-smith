import {DrawerButton, IDrawerButtonProps} from "@leight-core/common";
import {ModDto} from "@/sdk/puff-smith/mod/dto";
import {FC} from "react";
import {ModIcon} from "@/puff-smith";
import {ExportOutlined} from "@ant-design/icons";
import {ModPreview} from "../ModPreview";
import {ModLinkButton} from "./ModLinkButton";

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
			<ModPreview forceList mod={mod}/>
		</DrawerButton>
		<ModLinkButton
			size={'small'}
			title={null}
			icon={<ExportOutlined/>}
			mod={mod}
		/>
	</>
}