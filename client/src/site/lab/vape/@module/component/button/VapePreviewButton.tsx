import {EyeOutlined} from "@ant-design/icons";
import {VapeIcon} from "@/puff-smith";
import {VapePreview} from "@/puff-smith/site/lab/vape";
import {DrawerButton, IDrawerButtonProps, PreviewTemplate} from "@leight-core/leight/dist";
import {VapeDto} from "@/sdk/puff-smith/vape/dto";
import {FC} from "react";

export interface IVapePreviewButtonProps extends Partial<IDrawerButtonProps> {
	vape: VapeDto;
}

export const VapePreviewButton: FC<IVapePreviewButtonProps> = ({vape, ...props}) => {
	return <DrawerButton
		width={750}
		size={'large'}
		type={'link'}
		icon={<EyeOutlined/>}
		title={'lab.vape.preview'}
		{...props}
	>
		<PreviewTemplate
			icon={<VapeIcon/>}
			label={'lab.vape.preview'}
			span={24}
		>
			<VapePreview vape={vape}/>
		</PreviewTemplate>
	</DrawerButton>;
}
