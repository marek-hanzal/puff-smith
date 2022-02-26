import {VapeIcon} from "@/puff-smith";
import {DrawerButton, IDrawerButtonProps} from "@leight-core/common";
import {VapeDto} from "@/sdk/puff-smith/vape/dto";
import {FC} from "react";
import {ExportOutlined} from "@ant-design/icons";
import {VapePreview} from "../VapePreview";
import {VapeLinkButton} from "./VapeLinkButton";

export interface IVapePreviewButtonProps extends Partial<IDrawerButtonProps> {
	vape: VapeDto;
}

export const VapePreviewButton: FC<IVapePreviewButtonProps> = ({vape, ...props}) => {
	return <>
		<DrawerButton
			size={'large'}
			type={'link'}
			icon={<VapeIcon/>}
			title={'lab.vape.preview'}
			{...props}
		>
			<VapePreview vape={vape}/>
		</DrawerButton>
		<VapeLinkButton
			size={'small'}
			title={null}
			icon={<ExportOutlined/>}
			vape={vape}
		/>
	</>
}
