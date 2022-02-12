import {DrawerButton, IDrawerButtonProps, PreviewTemplate} from "@leight-core/leight";
import {CottonDto} from "@/sdk/puff-smith/cotton/dto";
import {FC} from "react";
import {CottonIcon} from "@/puff-smith";
import {CottonLinkButton, CottonPreview} from "@/puff-smith/site/lab/cotton";

export interface ICottonPreviewButtonProps extends Partial<IDrawerButtonProps> {
	cotton: CottonDto;
}

export const CottonPreviewButton: FC<ICottonPreviewButtonProps> = ({cotton, ...props}) => {
	return <>
		<DrawerButton
			type={'link'}
			size={'large'}
			icon={<CottonIcon/>}
			title={'lab.cotton.preview'}
			{...props}
		>
			<PreviewTemplate
				icon={<CottonIcon/>}
				label={'lab.cotton.preview'}
				title={cotton.name}
				subTitle={cotton.vendor.name}
				span={24}
			>
				<CottonPreview cotton={cotton}/>
			</PreviewTemplate>
		</DrawerButton>
		<CottonLinkButton title={null} cotton={cotton}/>
	</>
}
