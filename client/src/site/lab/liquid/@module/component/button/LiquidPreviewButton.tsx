import {DrawerButton, IDrawerButtonProps, PreviewTemplate} from "@leight-core/leight";
import {LiquidDto} from "@/sdk/puff-smith/liquid/dto";
import {FC} from "react";
import {EyeOutlined} from "@ant-design/icons";
import {LiquidIcon} from "@/puff-smith";
import {LiquidPreview} from "@/puff-smith/site/lab/liquid";

export interface ILiquidPreviewButtonProps extends Partial<IDrawerButtonProps> {
	liquid: LiquidDto;
}

export const LiquidPreviewButton: FC<ILiquidPreviewButtonProps> = ({liquid, ...props}) => {
	return <DrawerButton
		width={750}
		type={'link'}
		size={'large'}
		icon={<EyeOutlined/>}
		title={'lab.liquid.preview'}
		{...props}
	>
		<PreviewTemplate
			icon={<LiquidIcon/>}
			label={'lab.liquid.preview'}
			span={24}
		>
			<LiquidPreview liquid={liquid}/>
		</PreviewTemplate>
	</DrawerButton>;
}
