import {DrawerButton, IDrawerButtonProps} from "@leight-core/common";
import {CoilDto} from "@/sdk/puff-smith/coil/dto";
import {FC} from "react";
import {CoilIcon} from "@/puff-smith";
import {ExportOutlined} from "@ant-design/icons";
import {CoilPreview} from "../CoilPreview";
import {CoilLinkButton} from "./CoilLinkButton";

export interface ICoilPreviewButtonProps extends Partial<IDrawerButtonProps> {
	coil: CoilDto;
}

export const CoilPreviewButton: FC<ICoilPreviewButtonProps> = ({coil, ...props}) => {
	return <>
		<DrawerButton
			type={'link'}
			size={'large'}
			icon={<CoilIcon/>}
			title={'lab.coil.preview'}
			{...props}
		>
			<CoilPreview coil={coil}/>
		</DrawerButton>
		<CoilLinkButton
			size={'small'}
			title={null}
			icon={<ExportOutlined/>}
			coil={coil}
		/>
	</>
}
