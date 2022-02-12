import {VapeIcon} from "@/puff-smith";
import {VapeLinkButton, VapePreview} from "@/puff-smith/site/lab/vape";
import {DrawerButton, IDrawerButtonProps} from "@leight-core/leight";
import {VapeDto} from "@/sdk/puff-smith/vape/dto";
import {FC} from "react";
import {ExportOutlined} from "@ant-design/icons";

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
