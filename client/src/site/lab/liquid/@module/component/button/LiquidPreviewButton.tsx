import {DrawerButton, IDrawerButtonProps} from "@leight-core/leight";
import {LiquidDto} from "@/sdk/puff-smith/liquid/dto";
import {FC} from "react";
import {LiquidIcon} from "@/puff-smith";
import {ILiquidPreviewProps, LiquidPreview} from "@/puff-smith/site/lab/liquid";

export interface ILiquidPreviewButtonProps extends Partial<IDrawerButtonProps> {
	liquid: LiquidDto;
	liquidPreviewProps?: Partial<ILiquidPreviewProps>;
}

export const LiquidPreviewButton: FC<ILiquidPreviewButtonProps> = ({liquid, liquidPreviewProps, ...props}) => {
	return <DrawerButton
		type={'link'}
		size={'large'}
		icon={<LiquidIcon/>}
		title={'lab.liquid.preview'}
		{...props}
	>
		<LiquidPreview
			hidden={['upload', 'images']}
			forceList
			liquid={liquid}
			{...liquidPreviewProps}
		/>
	</DrawerButton>;
}
