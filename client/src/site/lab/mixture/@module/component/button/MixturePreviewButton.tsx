import {DrawerButton, IDrawerButtonProps, PreviewTemplate} from "@leight-core/leight";
import {MixtureDto} from "@/sdk/puff-smith/mixture/dto";
import {FC} from "react";
import {MixtureIcon} from "@/puff-smith";
import {MixturePreview} from "@/puff-smith/site/lab/mixture";

export interface IMixturePreviewButtonProps extends Partial<IDrawerButtonProps> {
	mixture: MixtureDto;
}

export const MixturePreviewButton: FC<IMixturePreviewButtonProps> = ({mixture, ...props}) => {
	return <DrawerButton
		type={'link'}
		size={'large'}
		icon={<MixtureIcon/>}
		title={'lab.mixture.preview'}
		{...props}
	>
		<PreviewTemplate
			icon={<MixtureIcon/>}
			label={'lab.mixture.preview'}
			title={mixture.liquid.name}
			subTitle={mixture.liquid.vendor.name}
			span={24}
		>
			<MixturePreview mixture={mixture}/>
		</PreviewTemplate>
	</DrawerButton>;
}
