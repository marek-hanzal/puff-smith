import {DrawerButton, IDrawerButtonProps} from "@leight-core/common";
import {LiquidDto} from "@/sdk/puff-smith/liquid/dto";
import {FC} from "react";
import {LiquidIcon} from "@/puff-smith";
import {ExportOutlined} from "@ant-design/icons";
import {ILiquidPreviewProps, LiquidPreview} from "../LiquidPreview";
import {LiquidLinkButton} from "./LiquidLinkButton";

export interface ILiquidPreviewButtonProps extends Partial<IDrawerButtonProps> {
	liquid: LiquidDto;
	liquidPreviewProps?: Partial<ILiquidPreviewProps>;
}

export const LiquidPreviewButton: FC<ILiquidPreviewButtonProps> = ({liquid, liquidPreviewProps, ...props}) => {
	return <>
		<DrawerButton
			type={'link'}
			size={'large'}
			icon={<LiquidIcon/>}
			title={'lab.liquid.preview'}
			{...props}
		>
			<LiquidPreview
				hidden={['upload']}
				forceList
				liquid={liquid}
				{...liquidPreviewProps}
			/>
		</DrawerButton>
		<LiquidLinkButton
			size={'small'}
			title={null}
			icon={<ExportOutlined/>}
			liquid={liquid}
		/>
	</>
}
