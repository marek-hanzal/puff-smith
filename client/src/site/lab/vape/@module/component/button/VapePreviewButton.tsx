import {VapeIcon} from "@/puff-smith";
import {VapePreview} from "@/puff-smith/site/lab/vape";
import {DrawerButton, IDrawerButtonProps, PreviewTemplate} from "@leight-core/leight";
import {VapeDto} from "@/sdk/puff-smith/vape/dto";
import {FC} from "react";
import {AtomizerInline} from "@/puff-smith/site/lab/atomizer";

export interface IVapePreviewButtonProps extends Partial<IDrawerButtonProps> {
	vape: VapeDto;
}

export const VapePreviewButton: FC<IVapePreviewButtonProps> = ({vape, ...props}) => {
	return <DrawerButton
		size={'large'}
		type={'link'}
		icon={<VapeIcon/>}
		title={'lab.vape.preview'}
		{...props}
	>
		<PreviewTemplate
			icon={<VapeIcon/>}
			title={<AtomizerInline atomizer={vape.build.atomizer}/>}
			subTitle={vape.mixture.liquid.name}
			span={24}
		>
			<VapePreview vape={vape}/>
		</PreviewTemplate>
	</DrawerButton>;
}
