import {VapeIcon} from "@/puff-smith";
import {DrawerButton, IDrawerButtonProps} from "@leight-core/leight";
import {VapeDto} from "@/sdk/puff-smith/vape/dto";
import {FC} from "react";
import {ExportOutlined} from "@ant-design/icons";
import {VapePreview} from "@/puff-smith/site/lab/vape/@module/component/VapePreview";
import {VapeLinkButton} from "@/puff-smith/site/lab/vape/@module/component/button/VapeLinkButton";

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
